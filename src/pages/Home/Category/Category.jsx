import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section className='my-20'>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="Category Image" />
          <h3 className='md:text-4xl text-white uppercase text-center -mt-16 mb-20 md:mb-16'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Category Image" />
          <h3 className='md:text-4xl text-white uppercase text-center -mt-16 mb-20 md:mb-16'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Category Image" />
          <h3 className='md:text-4xl text-white uppercase text-center -mt-16 mb-20 md:mb-16'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Category Image" />
          <h3 className='md:text-4xl text-white uppercase text-center -mt-16 mb-20 md:mb-16'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Category Image" />
          <h3 className='md:text-4xl text-white uppercase text-center -mt-16 mb-20 md:mb-16'>Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
