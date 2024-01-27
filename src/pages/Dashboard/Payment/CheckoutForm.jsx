import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  }

  return (
    <div>
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
          <button type="submit" disabled={!stripe} className="font-semibold bg-[#D1A054] hover:bg-[#B98D4A] px-16 py-2 rounded-md duration-200">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
