import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import { GiLog } from "react-icons/gi";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    }
    else {
      setCardError('');
      // console.log('Payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    // console.log('Payment Intent', paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <div className="flex justify-center mt-10">
          <button type="submit" disabled={!stripe || !clientSecret || processing} className="font-semibold bg-[#D1A054] hover:bg-[#B98D4A] px-16 py-2 rounded-md duration-200">
            Pay
          </button>
        </div>
      </form>

      {cardError && <p className="text-rose-600 text-sm mt-5">{cardError}</p>}
      {transactionId && <p className="text-green-600 text-sm mt-5">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
