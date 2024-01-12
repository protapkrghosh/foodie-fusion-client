import { NavLink, Outlet } from "react-router-dom";
import { IoHome, IoMenu } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCartShopping, FaWallet } from "react-icons/fa6";
import { TbMessage2Star, TbCalendarPlus } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 md:w-64 min-h-full bg-[#d1a054] text-base-content">
            {/* Sidebar content here */}
            <div className="mb-10 ml-4">
              <p className="text-xl uppercase font-bold">Foodie Fusion</p>
              <p className="text-lg font-semibold tracking-[7px]">Restaurant</p>
            </div>

            <li className="uppercase">
              <NavLink to='/dashboard/home'><IoHome className="text-[18px]"/> User Home</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/reservation'><FaCalendarAlt className="text-[18px]"/>Reservation</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/history'><FaWallet className="text-[18px]"/> Payment History</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/mycart'><FaCartShopping className="text-[18px]"/> My Cart</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/review'><TbMessage2Star className="text-[21px]"/>Add Review</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/booking'><TbCalendarPlus className="text-[21px]"/>My Booking</NavLink>
            </li>

            <div className="divider"></div>

            <li className="uppercase">
              <NavLink to='/'><IoHome className="text-[18px]" /> Home</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/menu'><IoMenu className="text-[21px]" /> Menu</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/shop'><GiShoppingBag className="text-[19px]" /> Shop</NavLink>
            </li>
            <li className="uppercase">
              <NavLink to='/dashboard/contact'><MdEmail className="text-[18px]" /> Contact</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Dashboard;