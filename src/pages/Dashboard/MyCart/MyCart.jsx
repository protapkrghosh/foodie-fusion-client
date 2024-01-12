import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyCart = () => {
  return (
    <div>
      <Helmet>
        <title>My Cart | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Wanna add more?'} subHeading={'My Cart'} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque commodi consectetur? Natus delectus eveniet dolorem maiores magnam ratione alias. Incidunt veritatis molestias asperiores. Voluptas in vel consequuntur consectetur nesciunt?</p>
    </div>
  );
};

export default MyCart;
