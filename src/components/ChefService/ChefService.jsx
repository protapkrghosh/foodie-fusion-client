
const ChefService = ({ title, content, sectionBg}) => {
  return (
    <div style={sectionBg} className="text-center h-[500px] bg-center bg-cover relative">
      <div className="bg-white md:w-5/6 p-10 md:p-14 lg:p-20 absolute my-16 md:my-28 mx-10 md:mx-20 lg:mx-28">
        <h2 className="text-3xl text-[#1F2937] uppercase mb-5">{title}</h2>
        <p className="text-[#72777e] text-[17px]">{content}</p>
      </div>
    </div>
  );
};

export default ChefService;
