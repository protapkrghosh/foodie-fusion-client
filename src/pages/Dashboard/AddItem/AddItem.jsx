import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Add Item | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={"Add an item"} subHeading={"What's new"} />

      <div>

      </div>
    </div>
  );
};

export default AddItem;