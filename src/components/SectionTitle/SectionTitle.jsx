
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-3/12 mx-auto my-8">
      <p className="text-[#D99904] mb-2 italic">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-2 py-3 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
