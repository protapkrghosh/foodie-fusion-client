import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const ChefRecommends = () => {
  const [menu] = useMenu();

  return (
    <section className="my-20">
      <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          menu.slice(0, 3).map(item => <FoodCard
            key={item._id}
            item={item}
          />)
        }
      </div>
    </section>
  );
};

export default ChefRecommends;
