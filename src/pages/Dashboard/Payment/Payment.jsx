import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Payment = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Payment | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Payment'} subHeading={'Please Process'} />
    </div>
  );
};

export default Payment;