import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import { useMenu } from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === "offered");
  const desserts = menu.filter(item => item.category === "dessert");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Menu - Foodie Fusion Restaurant</title>
      </Helmet>

      {/*Main Banner */}
      <Cover img={menuImg} title={'Our Menu'} contents={'Would you like to try a dish?'} />

      {/* Today's Offered */}
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      
      {/* Dessert menu items */}
      <MenuCategory
        img={dessertImg}
        items={desserts}
        title='Dessert'
        subtitle='THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.'
      />
    </div>
  );
};

export default Menu;
