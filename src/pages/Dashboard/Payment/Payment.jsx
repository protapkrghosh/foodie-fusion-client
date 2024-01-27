import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Payment | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Payment'} subHeading={'Please Process'} />

      <div className="w-[70%] md:w-[40%] mx-auto mt-20">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;