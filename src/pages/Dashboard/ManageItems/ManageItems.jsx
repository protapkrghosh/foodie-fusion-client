import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success(`${item.name} deleted successfully`);
            }
          })
      }
    });
  }

  return (
    <div className="w-full mx-auto bg-[#f6f6f6]">
      <Helmet>
        <title>Manage Items | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up!'} />

      {/* Table */}
      <div className="px-5 md:px-12 lg:px-20 mt-10 md:mt-16">
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
                  <th>Recipe Image</th>
                  <th>Item Name</th>
                  <th>Category</th>
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
                    <td className="text-[14px] font-semibold">{index + 1}</td>
                    <td>
                      <img src={item.image} alt="Food Image" className="w-24 h-16 rounded-xl" />
                    </td>
                    <td>
                      <p className="text-[16px] font-semibold">{item.name}</p>
                    </td>
                    <td>
                      <p className="text-[#a5a5a5] capitalize mt-[2px]">{item.category}</p>
                    </td>
                    <td className="font-semibold">${item.price}</td>
                    <td>
                      <button className="text-white text-[18px] flex justify-center items-center w-8 h-8 bg-[#D1A054] hover:bg-[#B98D4A] rounded-md duration-200"><FaRegEdit /></button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item)} className="text-white text-xl flex justify-center items-center w-8 h-8 bg-rose-600 hover:bg-rose-700 rounded-md duration-200"><RiDeleteBinLine /></button>
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