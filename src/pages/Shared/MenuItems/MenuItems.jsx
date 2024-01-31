
const MenuItems = ({ item }) => {
  const {name, image, price, recipe } = item;

  return (
    <div className="flex items-center space-x-5">
      <img className="w-28 h-28 rounded-b-full rounded-tr-full hover:rounded-tr-none hover:rounded-tl-full duration-300" src={image} alt="Recipe Image" />
      <div>
        <h3 className="uppercase">{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;