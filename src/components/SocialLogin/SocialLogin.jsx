import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.name, email: loggedInUser.email }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          })
      })
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-[15px] my-2 font-semibold'>Or sign in with</p>

      <div className='flex justify-center items-center space-x-8'>
        <span className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
          <FaFacebookF className='group-hover:scale-125 duration-200' />
        </span>
        <span onClick={handleGoogleSignIn} className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
          <FaGoogle className='group-hover:scale-125 duration-200' />
        </span>
        <span className='border border-black p-[9px] rounded-full text-[20px] cursor-pointer group'>
          <FaGithub className='group-hover:scale-125 duration-200' />
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
