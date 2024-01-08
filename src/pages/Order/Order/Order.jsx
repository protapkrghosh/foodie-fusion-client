import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMenu } from '../../../hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category); 
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const soup = menu.filter(item => item.category === "soup");
  const desserts = menu.filter(item => item.category === "dessert");
  const drinks = menu.filter(item => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Shop | Foodie Fusion Restaurant</title>
      </Helmet>

      <Cover img={orderCoverImg} title={'Our Shop'} contents={'Would you like to try a dish?'} />
      
      <div className='flex justify-center my-20'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel><OrderTabs items={salad}/></TabPanel>
          <TabPanel><OrderTabs items={pizza}/></TabPanel>
          <TabPanel><OrderTabs items={soup}/></TabPanel>
          <TabPanel><OrderTabs items={desserts}/></TabPanel>
          <TabPanel><OrderTabs items={drinks}/></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;