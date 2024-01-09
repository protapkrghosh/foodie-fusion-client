import { Link } from 'react-router-dom'
import img from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";

const SignUp = () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className='my-14'>
        <div className="hero-content flex-col md:flex-row-reverse shadowBg py-8">
          <div className="text-center lg:text-left md:w-1/2">
            <img src={img} alt="Image" className='w-[500px] lg:w-[600px]' />
          </div>

          {/* Login Form */}
          <div className="card w-full lg:w-1/2 md:max-w-sm">
            <h3 className='text-3xl text-center font-bold -mb-5'>Sign Up</h3>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-[16px] font-semibold">Name<span className='text-rose-600'>*</span></p>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <p className="label-text text-[16px] font-semibold">Email<span className='text-rose-600'>*</span></p>
                </label>
                <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <p className="label-text text-[16px] font-semibold">Password<span className='text-rose-600'>*</span></p>
                </label>
                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
              </div>

              <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="text-white text-[16px] btn bg-[#D1A054] hover:bg-[#bd904c] uppercase" />
              </div>
            </form>

            {/* Social Media */}
            <div className='flex flex-col justify-center items-center -mt-3'>
              <p className='text-[#D1A054]'><small>Already registered? <Link to='/signin' className='font-semibold hover:underline'>Go to log in</Link> </small></p>
              <p className='text-[15px] my-2 font-semibold'>Or sign in with</p>

              <div className='flex justify-center items-center space-x-8'>
                <span className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
                  <FaFacebookF className='group-hover:scale-125 duration-200' />
                </span>
                <span className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
                  <FaGoogle className='group-hover:scale-125 duration-200' />
                </span>
                <span className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
                  <FaGithub className='group-hover:scale-125 duration-200' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;