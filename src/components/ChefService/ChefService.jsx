import { Parallax } from 'react-parallax';

const ChefService = ({ title, content, sectionBg}) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      style={sectionBg}
      bgImageAlt="the dog"
      strength={-200}
      className='bg-center bg-cover'
    >
      <div className="text-center h-[500px]  relative">
        <div className="bg-white md:w-5/6 p-10 md:p-14 lg:p-20 absolute my-16 md:my-28 mx-10 md:mx-20 lg:mx-28">
          <h2 className="text-3xl text-[#4D4C49] font-semibold uppercase mb-5">{title}</h2>
          <p className="text-[#72777e] text-[17px]">{content}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ChefService;
