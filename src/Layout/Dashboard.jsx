import { Link, Outlet } from "react-router-dom";
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
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#d1a054] text-base-content">
            {/* Sidebar content here */}
            <li className="uppercase">
              <Link><IoHome className="text-[18px]"/> User Home</Link>
            </li>
            <li className="uppercase">
              <Link><FaCalendarAlt className="text-[18px]"/>Reservation</Link>
            </li>
            <li className="uppercase">
              <Link><FaWallet className="text-[18px]"/> Payment History</Link>
            </li>
            <li className="uppercase">
              <Link><FaCartShopping className="text-[18px]"/> My Cart</Link>
            </li>
            <li className="uppercase">
              <Link><TbMessage2Star className="text-[21px]"/>Add Review</Link>
            </li>
            <li className="uppercase">
              <Link><TbCalendarPlus className="text-[21px]"/>My Booking</Link>
            </li>

            <div className="divider"></div>

            <li className="uppercase">
              <Link><IoHome className="text-[18px]" /> Home</Link>
            </li>
            <li className="uppercase">
              <Link><IoMenu className="text-[21px]" /> Menu</Link>
            </li>
            <li className="uppercase">
              <Link><GiShoppingBag className="text-[19px]" /> Shop</Link>
            </li>
            <li className="uppercase">
              <Link><MdEmail className="text-[18px]" /> Contact</Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Dashboard;