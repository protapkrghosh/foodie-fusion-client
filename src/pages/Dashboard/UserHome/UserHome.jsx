import { GiWallet } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoCart, IoStar } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { useAuth } from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-full mx-auto bg-[#F6F6F6] min-h-screen pt-5 md:pt-10 px-5 md:px-10">
      <h2 className="text-2xl font-semibold capitalize">Hi {user?.displayName}, Welcome Back!</h2>

      {/* Stats Card */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#bb34f5] to-[#edcff0] rounded-md">
          <GiWallet className="text-[32px] mr-3" />
          <div>
            <p className="text-3xl font-bold">$205</p>
            <p className="text-xl">Menu</p>
          </div>
        </div>

        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#D3A256] to-[#f3ddb6] rounded-md">
          <CiShop className="text-[34px] mr-3" />
          <div>
            <p className="text-3xl font-bold">28</p>
            <p className="text-xl">Shops</p>
          </div>
        </div>

        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#FE4880] to-[#f1c2dd] rounded-md">
          <LiaPhoneVolumeSolid className="text-[32px] mr-3" />
          <div>
            <p className="text-3xl font-bold">03</p>
            <p className="text-xl">Contacts</p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center mt-8">
        <div className="bg-[#f8e6ce] md:w-1/2 h-72 md:h-96 flex flex-col justify-center items-center md:border-r-2 border-[#d4a35983]">
          <img src={user?.photoURL} alt="Image" className="w-36 h-36 rounded-full border-4 border-[#c5b7a491]" />
          <p className="text-xl font-semibold capitalize mt-6">{user?.displayName}</p>
        </div>

        <div className="bg-[#f7f2c0] md:w-1/2 h-72 md:h-96">
          <div className="pl-16 pt-14 md:pt-20 mt-10 md:mt-0">
            <div className="space-y-1">
              <p className="text-xl font-semibold uppercase mb-6">Your Activities</p>
              <p className="text-[#0088FE] font-semibold uppercase flex items-center">
                <IoCart className="text-[23px] mr-1" />
                Order: 6
              </p>
              <p className="text-[#00C4A1] font-semibold uppercase flex items-center">
                <IoStar className="text-[21px] mr-1" />
                Reviews: 2
              </p>
              <p className="text-[#FFBB28] font-semibold uppercase flex items-center">
                <FaCalendarDays className="text-[19px] mr-1" />
                Bookings: 3
              </p>
              <p className="text-[#FF8042] font-semibold uppercase flex items-center">
                <GiWallet className="text-[21px] mr-1" />
                Payment: 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
