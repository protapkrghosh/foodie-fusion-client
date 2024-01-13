import { Helmet } from 'react-helmet-async';
import { BiSolidErrorAlt } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import img from '../../assets/others/authentication2.png'
import loginBg from '../../assets/others/authentication.png'
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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
        toast.success('User Sign In Successful');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) !== true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign In | Foodie Fusion Restaurant</title>
      </Helmet>

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
                  <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />
                </div>
                
                {/* Error massage */}
                {error && (
                  <p className="flex items-center gap-2 pt-2 ml-1 text-xs text-red-500" role="alert">
                    <BiSolidErrorAlt size={17} /> <span>{error}</span>
                  </p>
                )}

                <div className="form-control mt-6">
                  <input disabled={disabled} type="submit" value="Sign In" className="text-white text-[16px] btn bg-[#D1A054] hover:bg-[#bd904c] uppercase" />
                </div>
              </form>

              {/* Social media login */}
              <p className='text-center text-[#D1A054]'><small>New here? <Link to='/signup' className='font-semibold hover:underline'>Create a New Account</Link> </small></p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;