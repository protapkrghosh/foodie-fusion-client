import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/menu/product1.jpg"
import img2 from "../../../assets/menu/product2.jpg"
import img3 from "../../../assets/menu/product3.jpg"

const ChefRecommends = () => {
  return (
    <section className="my-20">
      <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="card lg:w-96 bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200">
          <figure>
            <img src={img1} alt="Shoes" className="h-[270px]" />
          </figure>

          <div className="bg-[#EFEFEF]">
            <div className="card-body flex justify-center items-center text-center border border-dashed border-[#CDCDCD] m-2">
              <h2 className="card-title text-[19px] text-[#594A65] uppercase">Apple Strudel</h2>
              <p className="text-[#BABBBC]">Apples, Vanilla Ice Cream, Nuts, Roast Duck Breast</p>
              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-2 hover:border-[#BB8506] mt-3 bg-[#EFEFEF] hover:bg-[#EFEFEF] text-[#BB8506] hover:text-[#BB8506] uppercase">Add To Card</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card lg:w-96 bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200">
          <figure>
            <img src={img2} alt="Shoes" className="h-[270px]" />
          </figure>

          <div className="bg-[#EFEFEF]">
            <div className="card-body flex justify-center items-center text-center border border-dashed border-[#CDCDCD] m-2">
              <h2 className="card-title text-[19px] text-[#594A65] uppercase">Caeser Salad</h2>
              <p className="text-[#BABBBC]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-2 hover:border-[#BB8506] mt-3 bg-[#EFEFEF] hover:bg-[#EFEFEF] text-[#BB8506] hover:text-[#BB8506] uppercase">Add To Card</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card lg:w-96 bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200">
          <figure>
            <img src={img3} alt="Shoes" className="h-[270px]" />
          </figure>

          <div className="bg-[#EFEFEF]">
            <div className="card-body flex justify-center items-center text-center border border-dashed border-[#CDCDCD] m-2">
              <h2 className="card-title text-[19px] text-[#594A65] uppercase">Cherry Pie</h2>
              <p className="text-[#BABBBC]">Cherries, Dough, White Sugar, Cheese, Vanilla Ice Cream</p>
              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-2 hover:border-[#BB8506] mt-3 bg-[#EFEFEF] hover:bg-[#EFEFEF] text-[#BB8506] hover:text-[#BB8506] uppercase">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
