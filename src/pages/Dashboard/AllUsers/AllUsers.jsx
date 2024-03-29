import { RiDeleteBinLine } from "react-icons/ri";
import toast from 'react-hot-toast';
import { FaUsers, FaUserShield } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://foodiefusionserver.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now!`);
        }
      })
  }

  const handleMakeUser = (user) => {
    fetch(`https://foodiefusionserver.vercel.app/users/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an User Now!`);
        }
      })
  }

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${user.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://foodiefusionserver.vercel.app/users/${user._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Successful",
                text: `${user.name} has been deleted`,
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div className="w-full mx-auto bg-[#f6f6f6] min-h-screen">
      <Helmet>
        <title>All Users | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={'Manage All Users'} subHeading={'How Many ??'} />

      <div className="px-5 md:px-20 lg:px-32 my-10 md:mt-16">
        <div className="bg-white p-8">
          <p className="text-xl font-semibold uppercase mb-5">Total Users: {users.length}</p>
          <div>
            <div className="overflow-x-auto rounded-t-xl">
              <table className="table table-zebra">
                {/* head */}
                <thead className="text-white bg-[#D1A054] uppercase">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) => <tr key={user._id}>
                      <th className="text-[14px] font-semibold">{index + 1}</th>
                      <td className="text-[15px] font-semibold capitalize">{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>
                        {
                          user.role === 'admin' ? <>
                            <button onClick={() => handleMakeUser(user)} className="text-white text-xl flex justify-center items-center w-8 h-8 bg-[#D1A054] hover:bg-[#b68a49] rounded-md duration-200 tooltip tooltip-left" data-tip="Admin"><FaUserShield /></button>
                          </> : <>
                            <button onClick={() => handleMakeAdmin(user)} className="text-white text-xl flex justify-center items-center w-8 h-8 bg-[#D1A054] hover:bg-[#b68a49] rounded-md duration-200 tooltip tooltip-left" data-tip="User"><FaUsers /></button>
                          </>
                        }
                      </td>
                      <td>
                        <button onClick={() => handleDelete(user)} className="text-white text-xl flex justify-center items-center w-8 h-8 bg-rose-600 hover:bg-rose-700 rounded-md duration-200"><RiDeleteBinLine /></button>
                      </td>
                    </tr>)
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;