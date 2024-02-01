import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Practice = () => {
    const [colors, setColors] = useState("red")
    

    const onSubmit = (data) => {
      console.log(data);
    }
    const schema = yup.object().shape({
      fullname: yup.string().required("Your fullname is required"),
      email: yup.string().email().required(),
      age: yup.number().positive().integer().min(18).required(),
      password: yup.string().min(4).max(20).required(),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null, "passwords don't match"]).required(),
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema),
    });
    
  return (
    <div>
      <h1 style={{color:`${colors}`}}>i am a color {colors}</h1>
      {
        colors === "red" ?
        <button type='button' style={{background: "green", color: "white"}} onClick={() => setColors("blue")}>change to blue</button>
        :
        <button type='button' style={{background: "green", color: "white"}} onClick={() => setColors("red")}>change to red</button>
      }
      <br /><br />

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className='bg-black' placeholder='Full Name...' {...register("fullname")} /> <p className='text-red-500'>{errors.fullname?.message}</p>
        <input type="text" className='bg-black' placeholder='Email...' {...register("email")} /> <p className='text-red-500'>{errors.email?.message}</p> <br />
        <input type="number" className='bg-black' placeholder='Age...' {...register("age")} /> <p className='text-red-500'>{errors.age?.message}</p> <br />
        <input type="password" className='bg-black' placeholder='Password...' {...register("password")} /> <p className='text-red-500'>{errors.password?.message}</p> <br />
        <input type="password" className='bg-black' placeholder='Confirm Password...' {...register("confirmPassword")} /> <p className='text-red-500'>{errors.confirmPassword?.message}</p> <br />
        <input type="submit" className='bg-black' />
      </form>
      
    </div>
  )
}

export default Practice
