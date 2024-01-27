import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useCart } from "../../../hooks/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const Total = cart.reduce((sum, item) => item.price + sum, 0)
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Successful",
                text: `${item.name} has been deleted`,
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div className="w-full mx-auto bg-[#f6f6f6]">
      <Helmet>
        <title>My Cart | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Wanna Add more?'} subHeading={'My Cart'} />

      {/* Table */}
      <div className="px-5 md:px-20 lg:px-32 mt-10 md:mt-16">
        <div className="bg-white p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold uppercase">Total Cart: {cart.length}</h3>
            <h3 className="text-xl font-semibold uppercase">Total Price: ${Total}</h3>
            <Link to="/dashboard/payment">
              <button className="btn btn-sm bg-[#ebb25e] hover:bg-[#D1A054] border-none rounded-md uppercase">Pay</button>
            </Link>
          </div>

          <div className="overflow-x-auto rounded-t-xl">
            <table className="table">
              {/* head */}
              <thead className="text-white bg-[#D1A054] uppercase">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  cart.map((item, index) => <tr
                    key={item._id}
                  >
                    <td className="text-[14px] font-semibold">{index + 1}</td>
                    <td>
                      <img src={item.image} alt="Food Image" className="w-24 h-16 rounded-xl" />
                    </td>
                    <td>
                      <p className="text-[16px] font-semibold">{item.name}</p>
                    </td>
                    <td className="font-semibold">${item.price}</td>
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

export default MyCart;
