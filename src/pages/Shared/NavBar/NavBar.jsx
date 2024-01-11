import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad">Our Shop</Link></li>
    <li><Link to="/secret">Secret</Link></li>
    <li className="relative">
      <Link to="/">
        <FaShoppingCart className="text-2xl"/>
        <div className="flex justify-center items-center font-semibold h-6 w-6 bg-[#e6af5d] border-none text-black rounded-full absolute left-8 -top-1">9</div>
      </Link>
    </li>

    {
      user ? <>
        <li><button onClick={handleLogOut} className="uppercase font-normal" >Sign Out</button></li>
        {user ? <span className="ml-3">{user?.displayName}</span> : " "}
      </> : <>
        <li><Link to="/signin">Login</Link></li>
      </>
    }
  </>

  return (
    <>
      <div className="navbar fixed bg-opacity-40 z-10 text-white bg-zinc-800 max-w-[96%] px-6">
        <div className="navbar-start w-2/12">
          <Link to="/" className="text-xl font-semibold">
            <p className="uppercase">Foodie Fusion</p>
            <p className="tracking-[.28em]">Restaurant</p>
          </Link>
        </div>

        <div className="navbar-end w-full">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase flex items-center">
              {navOptions}
            </ul>
          </div>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 -ml-[118px] z-[1] py-5 px-2 shadow bg-slate-700 rounded-xl w-52 uppercase">
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
