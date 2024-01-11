import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10'>
      {
        items.map(item => <FoodCard
          key={item._id}
          item={item}
        />)
      }
    </div>
  );
};

export default OrderTabs;