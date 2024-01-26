import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React from 'react';
import { useForm } from 'react-hook-form';
import { ImSpoonKnife } from "react-icons/im";

const AddItem = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
              <input type="text" placeholder="Recipe name" className="input" />
            </label>

            <div className="flex gap-5">
              <label className="form-control w-full">
                <div className="label">
                  <p className="label-text text-[15px] font-semibold">Category<span className='text-rose-600'>*</span></p>
                </div>
                <select className="select">
                  <option disabled selected>Pick one</option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soup</option>
                  <option>Dessert</option>
                  <option>Drink</option>
                </select>
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <p className="label-text text-[15px] font-semibold">Price<span className='text-rose-600'>*</span></p>
                </div>
                <input type="number" placeholder="Price" className="input" />
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <p className="label-text text-[15px] font-semibold">Recipe Details<span className='text-rose-600'>*</span></p>
              </div>
              <textarea className="textarea h-40" placeholder="Recipe Details"></textarea>
            </label>

            <div className="pb-2">
              <input type="file" className="file:text-[15px] file:font-semibold file:border-dashed file:border-[1px] file:border-slate-400 file:px-4 file:py-1 w-full max-w-xs" />
            </div>

            <div className="flex items-center h-10 w-[130px] relative bg-gradient-to-r from-[#835D23] to-[#B58130] px-5 cursor-pointer text-white rounded-sm">
              <input type="button" value="Add Item" className="cursor-pointer"/>
              <span className="absolute right-5"><ImSpoonKnife /></span>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AddItem;