
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <>
      <div className="card lg:w-96 h-[520px] bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200">
        <figure>
          <img src={image} alt="Shoes" className="h-[270px] w-full" />
        </figure>

        <div className="bg-[#EFEFEF]">
          <div className=" h-[250px] border border-dashed border-[#CDCDCD] m-2">
            <div className="card-body flex justify-center items-center text-center">
              <h2 className="card-title text-[19px] text-[#565A5D] uppercase">{name}</h2>
              <p className="text-[#a0a1a1]">{recipe}</p>

              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-2 hover:border-[#BB8506] mt-3 bg-[#EFEFEF] hover:bg-[#EFEFEF] text-[#BB8506] hover:text-[#BB8506] uppercase">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;