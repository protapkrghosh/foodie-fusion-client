import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu - Foodie Fusion Restaurant</title>
      </Helmet>

      <Cover
        img={menuImg}
        title={'Our Menu'}
        contents={'Would you like to try a dish?'}
      />
    </div>
  );
};

export default Menu;