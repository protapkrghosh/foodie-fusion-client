import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../../../components/ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import bgImage from "../../../assets/others/Rectangle9.png"
import CallUs from "../CallUs/CallUs";

const Home = () => {
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div>
      <Banner />
      <Category />
      <ChefService
        sectionBg={bgImageStyle}
        title={'Foodie Fusion'}
        content={'Consectetur adipisicing elit. Doloremque assumenda reprehenderit illum voluptatibus rem facere. Ex fugiat nam sit at hic dolores recusandae consequuntur deserunt, harum veritatis aspernatur quibusdam temporibus.'}
      />
      <PopularMenu />
      <CallUs />
    </div>
  );
};

export default Home;