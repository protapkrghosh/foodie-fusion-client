import img from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="featured-bg bg-fixed text-white my-24">
      <div className="bg-slate-900 bg-opacity-50 pt-10">
        <SectionTitle
          subHeading="Check it out"
          heading="FROM OUR MENU"
        />

        <div className="md:flex justify-center items-center pb-16 pt-10 px-32">
          <div className="md:mr-10">
            <img src={img} alt="" className="rounded-md" />
          </div>
          <div>
            <p>March 20, {new Date().getFullYear()}</p>
            <p className="text-2xl uppercase">Where can i get some?</p>
            <p>Consectetur adipisicing elit. Odio quibusdam, earum eaque nesciunt quisquam modi est ratione dicta veritatis magnam sunt natus exercitationem, dolore consectetur assumenda commodi nam, eligendi provident!</p>
            <button className="btn btn-outline border-0 border-b-2 text-white mt-8">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
