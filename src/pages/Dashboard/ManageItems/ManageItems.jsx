import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageItems = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Manage Items | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up!'} />

    </div>
  );
};

export default ManageItems;