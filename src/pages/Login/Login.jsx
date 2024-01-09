import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom'
import img from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) !== true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className='my-14'>
        <div className="hero-content flex-col md:flex-row shadowBg py-8">
          <div className="text-center lg:text-left md:w-1/2">
            <img src={img} alt="Image" className='w-[500px] lg:w-[600px]' />
          </div>

          {/* Login Form */}
          <div className="card w-full lg:w-1/2 md:max-w-sm">
            <h3 className='text-3xl text-center font-bold -mb-5'>Sign In</h3>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* Captcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />

                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs border-[#D1A054] hover:border-[#D1A054] hover:bg-[#D1A054] w-16 mt-2 rounded-md">Validate</button>
              </div>

              <div className="form-control mt-6">
                <input disabled={disabled} type="submit" value="Sign In" className="text-white text-[16px] btn bg-[#D1A054] hover:bg-[#bd904c] uppercase" />
              </div>
            </form>

            {/* Social Media */}
            <div className='flex flex-col justify-center items-center -mt-3'>
              <p className='text-[#D1A054]'><small>New here? <Link to='/signup' className='font-semibold hover:underline'>Create a New Account</Link> </small></p>
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

export default Login;