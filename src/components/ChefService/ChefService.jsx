import { Parallax } from 'react-parallax';

const ChefService = ({ title, content, sectionBg }) => {
  const bgStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  }

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={sectionBg}
      bgImageAlt="the dog"
      strength={-300}
      style={{ ...bgStyle }}
    >
      <div className="text-center h-[500px] bg-cover bg-center flex justify-center items-center">
        <div className="bg-white bg-opacity-95 w-[80%] md:w-[60%] p-8 md:p-10 lg:p-12 rounded-sm">
          <h2 className="text-3xl text-[#4D4C49] font-semibold uppercase mb-5 border-t-[1px] border-b-[1px] border-[#252422] py-2 w-[50%] md:w-[21%] mx-auto">{title}</h2>
          <p className="text-[#5F5F5C] text-[15px] leading-7 uppercase">{content}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ChefService;
