import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1F2937] text-white p-10 text-center">
          <h3 className="text-2xl font-bold">Contact US</h3>
          <div className="space-y-2">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

        <div className="bg-[#111827] text-white p-10 text-center space-y-2">
          <h3 className="text-2xl font-bold">Follow US</h3>
          <p>Join us on social media</p>
          <div className="text-xl flex justify-center items-center space-x-3">
            <a href="" className="hover:bg-[#263242] p-3 rounded-full duration-300"><FaFacebookF /></a>
            <a href="" className="hover:bg-[#263242] p-3 rounded-full duration-300"><FaInstagram /></a>
            <a href="" className="hover:bg-[#263242] p-3 rounded-full duration-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-white text-center bg-[#1E1E1E] py-3">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Foodie Fusion Restaurant</p>
      </div>
    </footer >
  );
};

export default Footer;
