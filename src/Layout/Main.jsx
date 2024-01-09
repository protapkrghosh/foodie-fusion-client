import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

  return (
    <div>
      { hideHeaderFooter || <NavBar />}
      <Outlet />
      {hideHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;