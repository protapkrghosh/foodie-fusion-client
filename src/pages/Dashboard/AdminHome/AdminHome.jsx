import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure('/admin-stats');
      return res.data;
    }
  });

  return (
    <div className="w-full mx-auto bg-[#F6F6F6] min-h-screen pt-5 md:pt-10 px-5 md:px-14">
      <h2 className="text-2xl font-semibold capitalize">Hi {user?.displayName}, Welcome Back!</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#bb34f5] to-[#edcff0] rounded-md">
          <GiWallet className="text-[32px] mr-3"/>
          <div>
            <p className="text-center text-3xl font-bold">${stats.revenue}</p>
            <p className="text-xl">Revenue</p>
          </div>
        </div>
        
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#D3A256] to-[#f3ddb6] rounded-md">
          <FaUsers className="text-[32px] mr-3"/>
          <div>
            <p className="text-center text-3xl font-bold">{stats.users}</p>
            <p className="text-xl">Customers</p>
          </div>
        </div>
        
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#FE4880] to-[#f1c2dd] rounded-md">
          <IoFastFoodSharp className="text-[32px] mr-3"/>
          <div>
            <p className="text-center text-3xl font-bold">{stats.products}</p>
            <p className="text-xl">Menu Items</p>
          </div>
        </div>
        
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#6AAEFF] to-[#b0eef7] rounded-md">
          <CiDeliveryTruck className="text-[37px] mr-3"/>
          <div>
            <p className="text-center text-3xl font-bold">{stats.orders}</p>
            <p className="text-xl">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
