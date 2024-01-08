import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="mb-20">
      <SectionTitle subHeading={"What Our Clients Say"} heading={"Testimonials"} />

      <div>
        <Swiper autoplay={true} navigation={true} modules={[Navigation]} className="mySwiper">
          {
            reviews.map(review => <SwiperSlide
              key={review._id}
            >
              <div className="flex flex-col items-center text-center mx-32">
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl my-5" />
                <p className="text-[18px] mb-3 text-[#757883]">{review.details}</p>
                <p className="text-xl text-[#CD9003] uppercase">{review.name}</p>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
