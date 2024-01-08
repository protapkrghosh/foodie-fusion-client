
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <>
      <div className="card lg:w-96 bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200">
        <figure>
          <img src={img2} alt="Shoes" className="h-[270px]" />
        </figure>

        <div className="bg-[#EFEFEF]">
          <div className="card-body flex justify-center items-center text-center border border-dashed border-[#CDCDCD] m-2">
            <h2 className="card-title text-[19px] text-[#594A65] uppercase">Caeser Salad</h2>
            <p className="text-[#BABBBC]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 hover:border-[#BB8506] mt-3 bg-[#E8E8E8] hover:bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;