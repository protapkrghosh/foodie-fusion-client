import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../../../components/ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import bgImage from "../../../assets/others/Rectangle9.png"
import CallUs from "../CallUs/CallUs";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommends from "../ChefRecommends/ChefRecommends";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Foodie Fusion Restaurant</title>
      </Helmet>

      <Banner />
      <Category />
      <ChefService
        sectionBg={bgImage}
        title={'Foodie Fusion'}
        content={'Consectetur adipisicing elit. Doloremque assumenda reprehenderit illum voluptatibus rem facere. Ex fugiat nam sit at hic dolores recusandae consequuntur deserunt.'}
      />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;