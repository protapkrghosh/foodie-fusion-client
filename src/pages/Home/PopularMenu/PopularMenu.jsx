import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { useMenu } from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <section className="mt-16 mb-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          popular.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
      
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2 text-black mt-8 uppercase">View full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;