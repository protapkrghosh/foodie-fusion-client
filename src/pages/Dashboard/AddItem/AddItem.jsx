import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React from 'react';
import { useForm } from 'react-hook-form';
import { ImSpoonKnife } from "react-icons/im";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        console.log(imgResponse);
      })
  };
  console.log(errors);

  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Add Item | Foodie Fusion Restaurant</title>
      </Helmet>

      <SectionTitle heading={"Add an item"} subHeading={"What's new"} />

      <div className="px-5 md:px-20 lg:px-32">
        <div className="bg-[#f3f3f3] p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className="form-control">
              <div className="label">
                <p className="label-text text-[15px] font-semibold">Recipe name<span className='text-rose-600'>*</span></p>
              </div>
              <input type="text" placeholder="Recipe name" name="name" {...register("name", { required: true, maxLength: 120 })} className="input" />
              {errors.name && <span className='text-[14px] text-rose-600'>Name is required</span>}
            </label>

            <div className="flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <p className="label-text text-[15px] font-semibold">Category<span className='text-rose-600'>*</span></p>
                </div>
                <select defaultValue="Pick One" className="select" name="category" {...register("category", { required: true })}>
                  <option disabled>Pick One</option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soup</option>
                  <option>Dessert</option>
                  <option>Drink</option>
                </select>
                {errors.category && <span className='text-[14px] text-rose-600'> Category is required</span>}
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <p className="label-text text-[15px] font-semibold">Price<span className='text-rose-600'>*</span></p>
                </div>
                <input type="number" placeholder="Price" name="price" {...register("price", { required: true })} className="input" />
                {errors.price && <span className='text-[14px] text-rose-600'> Price is required</span>}
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <p className="label-text text-[15px] font-semibold">Recipe Details<span className='text-rose-600'>*</span></p>
              </div>
              <textarea className="textarea h-40" placeholder="Recipe Details" name="details" {...register("recipe", { required: true })}></textarea>
              {errors.recipe && <span className='text-[14px] text-rose-600'> Details is required</span>}
            </label>

            <div className="pb-2">
              <div>
                <input type="file" name="image" {...register("image", { required: true })} className="file:text-[15px] file:bg-zinc-300 file:font-semibold file:border-dashed file:border-[1px] file:border-slate-400 file:px-4 file:py-1 w-full max-w-xs" />
              </div>
              {errors.image && <span className='text-[14px] text-rose-600'> Recipe image is required</span>}
            </div>

            <div className="flex items-center h-10 w-[130px] relative bg-gradient-to-r from-[#835D23] to-[#B58130] px-5 cursor-pointer text-white rounded-sm">
              <input type="submit" value="Add Item" className="cursor-pointer" />
              <span className="absolute right-5"><ImSpoonKnife /></span>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AddItem;