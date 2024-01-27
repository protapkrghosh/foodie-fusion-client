import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="w-full mx-auto bg-[#f6f6f6]">
      <Helmet>
        <title>Manage Items | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up!'} />

      {/* Table */}
      <div className="px-5 md:px-20 lg:px-24 mt-10 md:mt-16">
        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold uppercase">Total Items: {menu.length}</h3>
          </div>

          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="text-white bg-[#D1A054] uppercase">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  menu.map((item, index) => <tr
                    key={item._id}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} alt="Food Image" className="w-24 h-16 rounded-xl" />
                    </td>
                    <td>
                      <p className="font-bold">{item.name}</p>
                    </td>
                    <td className="font-semibold">${item.price}</td>
                    <td>
                      <button className="text-white text-[18px] flex justify-center items-center w-8 h-8 bg-[#D1A054] hover:bg-[#B98D4A] rounded-md duration-200"><FaRegEdit /></button>
                    </td>
                    <td>
                      <button className="text-white text-xl flex justify-center items-center w-8 h-8 bg-rose-600 hover:bg-rose-700 rounded-md duration-200"><RiDeleteBinLine /></button>
                    </td>
                  </tr>)
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;