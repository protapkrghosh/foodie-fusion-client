import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMenu } from '../../../hooks/useMenu';
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
      
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='flex gap-5'>
            <Tab className=''>Salads</Tab>
            <Tab className=''>Pizzas</Tab>
            <Tab className=''>Soups</Tab>
            <Tab className=''>Desserts</Tab>
            <Tab className=''>Drinks</Tab>
          </TabList>
          <TabPanel>content 1</TabPanel>
          <TabPanel>content 2</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;