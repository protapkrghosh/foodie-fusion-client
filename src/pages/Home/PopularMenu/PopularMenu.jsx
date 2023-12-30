import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems)
      })
  }, [])

  return (
    <section className="mt-16 mb-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          menu.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;