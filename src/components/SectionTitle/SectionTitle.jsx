
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-5/12 md:w-3/12 mx-auto my-8">
      <p className="text-[#D99904] mb-2 italic">--- {subHeading} ---</p>
      <h3 className="text-[23px] md:text-[26px] border-y-2 py-2 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
