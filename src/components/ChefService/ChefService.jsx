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
      strength={-350}
      style={{ ...bgStyle }}
    >
      <div className="text-center h-[500px] bg-cover bg-center relative">
        <div className="bg-slate-900 bg-opacity-45 md:w-5/6 p-10 md:p-14 lg:p-20 absolute my-16 md:my-28 mx-10 md:mx-20 lg:mx-28 rounded-xl">
          <h2 className="text-3xl text-white font-semibold uppercase mb-5">{title}</h2>
          <p className="text-white text-[17px]">{content}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default ChefService;
