
const MenuItems = ({ item }) => {
  const {name, image, price, recipe } = item;

  return (
    <div className="flex items-center space-x-5">
      <img className="w-28 h-24 rounded-b-full rounded-tr-full" src={image} alt="Recipe Image" />
      <div>
        <h3 className="uppercase">{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;