import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useCart } from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const Total = cart.reduce((sum, item) => item.price + sum, 0)

  return (
    <div className="w-full">
      <Helmet>
        <title>My Cart | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Wanna add more?'} subHeading={'My Cart'} />
      
      <div>
        <h3>Total Cart: {cart.length}</h3>        
        <h3>Total Price: ${Total}</h3>        
      </div>
    </div>
  );
};

export default MyCart;
