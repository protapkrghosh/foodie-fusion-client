import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import img from '../../assets/404.gif'

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div className='flex flex-col justify-center items-center'>
        <img src={img} alt="Image" />
        <Link to='/' className='text-white bg-[#b48030] py-2 px-3 capitalize flex items-center rounded-sm'>Back to home <IoMdHome className='text-[19px] ml-2' /></Link>
      </div>
    </div>
  );
};

export default NotFound;
