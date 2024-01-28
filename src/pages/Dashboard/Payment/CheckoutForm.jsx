import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');

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

        {cardError && <p className="text-rose-600 text-sm mt-5">{cardError}</p>}
        <div className="flex justify-center mt-10">
          <button type="submit" disabled={!stripe} className="font-semibold bg-[#D1A054] hover:bg-[#B98D4A] px-16 py-2 rounded-md duration-200">
            Pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
