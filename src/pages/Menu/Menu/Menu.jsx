import { Helmet } from 'react-helmet-async';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import { useMenu } from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === "offered");
  const desserts = menu.filter(item => item.category === "dessert");
  const pizza = menu.filter(item => item.category === "pizza");
  const salad = menu.filter(item => item.category === "salad");
  const soup = menu.filter(item => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Menu | Foodie Fusion Restaurant</title>
      </Helmet>

      {/*Main Banner */}
      <Cover img={menuImg} title={'Our Menu'} contents={'Would you like to try a dish?'} />

      {/* Today's Offered */}
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered}/>
      
      {/* Dessert menu items */}
      <MenuCategory
        sectionBg={dessertImg}
        items={desserts}
        title='dessert'
        content='THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK'
      />

      {/* Pizza menu items */}
      <MenuCategory
        sectionBg={pizzaImg}
        items={pizza}
        title='pizza'
        content='Officia beatae odit accusamus reiciendis quo voluptatum sunt distinctio dolorum adipisci quasi? Ipsum ipsa minus labore! Sapiente sit, repudiandae dolores'
      />

      {/* Salad menu items */}
      <MenuCategory
        sectionBg={saladImg}
        items={salad}
        title='salad'
        content='Quia accusamus porro voluptate pariatur optio fugiat ex odit dolores velit nobis impedit quod voluptatum facere voluptates modi'
      />

      {/* Soup menu items */}
      <MenuCategory
        sectionBg={soupImg}
        items={soup}
        title='soup'
        content='Reprehenderit autem consectetur expedita ea culpa rerum provident assumenda tenetur, iste accusantium modi. Sint debitis tenetur illo officia '
      />
    </div>
  );
};

export default Menu;
