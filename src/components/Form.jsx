import React from 'react'
import { useForm } from 'react-hook-form'


const Form = ({handleFormSubmit}) => {

  const {register,reset,handleSubmit}=useForm();

const formHandler = (data)=>{
  handleFormSubmit(data);
  reset();
}

  return (
    
      <form className='flex gap-10 justify-center' onSubmit={handleSubmit(formHandler)}>
        <input  {...register("name",{required:true})} className='w-80 text-blue-800 px-3 rounded-md outline-none' type="text"  placeholder="Enter Name" />
        <input  {...register("email",{required:true})} className='w-80 text-blue-800 px-3 rounded-md outline-none' type="email" placeholder="Enter Email"/>
        <input  {...register("picture")} className='w-80 text-blue-800 px-3 rounded-md outline-none' type="text" placeholder="Profile-Image URL"/>
        <button type="submit" className='bg-slate-900 px-5 text-white py-1 rounded-full font-bold'>Make My Card</button>
      </form>
    
  )
}

export default Form