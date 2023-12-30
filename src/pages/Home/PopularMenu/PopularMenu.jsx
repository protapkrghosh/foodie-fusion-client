import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setMenu(data))
  }, [])

  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      />


    </section>
  );
};

export default PopularMenu;