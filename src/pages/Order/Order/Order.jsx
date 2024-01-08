import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMenu } from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
// import 'react-tabs/style/react-tabs.css';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");
  const desserts = menu.filter(item => item.category === "dessert");
  const drinks = menu.filter(item => item.category === "drinks");

  return (
    <div>
      <Cover img={orderCoverImg} title={'Our Shop'} contents={'Would you like to try a dish?'} />
      
      <div className='flex justify-center my-20'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='flex justify-center gap-5 mb-8 font-semibold uppercase'>
            <Tab className='cursor-pointer'>Salads</Tab>
            <Tab className='cursor-pointer'>Pizzas</Tab>
            <Tab className='cursor-pointer'>Soups</Tab>
            <Tab className='cursor-pointer'>Desserts</Tab>
            <Tab className='cursor-pointer'>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10'>
              {
                salad.map(item => <FoodCard
                  key={item._id}
                  item={item}
                />)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;