import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = item => {
    if (user) {
      fetch('http://localhost:5000/carts')
      .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
          toast.success('')
        }
      })
    }
    else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In Now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin')
        }
      });
    }
  }

  return (
    <>
      <div className="card lg:w-96 h-[520px] bg-base-100 hover:shadow-xl hover:shadow-[#dadada] rounded-none mx-auto duration-200 relative">
        <figure>
          <img src={image} alt="Shoes" className="h-[270px] w-full" />
        </figure>
        <p className="text-[#d6d7d8] text-[17px] text-center font-semibold bg-[#313639] p-2 absolute right-0 rounded-bl-xl">${price}</p>

        <div className="bg-[#EFEFEF]">
          <div className=" h-[250px] border border-dashed border-[#CDCDCD] m-2">
            <div className="card-body flex justify-center items-center text-center">
              <h2 className="card-title text-[19px] text-[#565A5D] uppercase">{name}</h2>
              <p className="text-[#a0a1a1]">{recipe}</p>

              <div className="card-actions">
                <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 hover:border-[#BB8506] mt-3 bg-[#EFEFEF] hover:bg-[#EFEFEF] text-[#BB8506] hover:text-[#BB8506] uppercase">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;