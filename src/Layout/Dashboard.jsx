import { NavLink, Outlet } from "react-router-dom";
import { IoHome, IoMenu } from "react-icons/io5";
import { FaCalendarAlt, FaBook } from "react-icons/fa";
import { FaCartShopping, FaWallet, FaPeopleGroup } from "react-icons/fa6";
import { TbMessage2Star, TbCalendarPlus } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: Load data from the server to have dynamic isAdmin based on data
  const isAdmin = true;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn bg-[#D0D0D0] drawer-button lg:hidden mt-2">Open Menu</label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu md:p-8 w-56 md:w-72 bg-[#d1a054] min-h-full text-base-content">
            {/* Sidebar content here */}
            <div className="mb-10 ml-4">
              <p className="text-xl uppercase font-bold">Foodie Fusion</p>
              <p className="text-lg font-semibold tracking-[7px]">Restaurant</p>
            </div>

            {
              isAdmin ? <>
                <li className="uppercase">
                  <NavLink to='/dashboard/home'><IoHome className="text-[18px]" /> Admin Home</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/add-items'><ImSpoonKnife className="text-[20px]" />Add Items</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/manage-items'><TfiMenuAlt className="text-[20px]" /> Manage Items</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/bookings'><FaBook className="text-[20px]" />Manage Bookings</NavLink>
                </li>
                <li className="uppercase relative">
                  <NavLink to='/dashboard/allusers'><FaPeopleGroup className="text-[20px]" /> All Users
                  </NavLink>
                </li>
              </> : <>
                <li className="uppercase">
                  <NavLink to='/dashboard/home'><IoHome className="text-[18px]" /> User Home</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/reservation'><FaCalendarAlt className="text-[18px]" />Reservation</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/history'><FaWallet className="text-[18px]" /> Payment History</NavLink>
                </li>
                <li className="uppercase relative">
                  <NavLink to='/dashboard/mycart'><FaCartShopping className="text-[18px]" /> My Cart
                    <span className="font-semibold badge bg-[#f8bf69] border-none text-black absolute right-[33%] md:right-[37%]">{cart?.length || 0}</span>
                  </NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/review'><TbMessage2Star className="text-[21px]" />Add Review</NavLink>
                </li>
                <li className="uppercase">
                  <NavLink to='/dashboard/booking'><TbCalendarPlus className="text-[21px]" />My Booking</NavLink>
                </li>
              </>
            }

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