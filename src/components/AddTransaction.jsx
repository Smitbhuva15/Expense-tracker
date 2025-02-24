"use client"
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

export default function AddTransaction() {
  
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit =async (data) =>{
      try {
        const res=await fetch('/api/addTransaction',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
           })
          
    
           if (res.ok) {
            const responseData = await res.json(); 
            reset();
            toast.success(responseData.message);
          } else {
            const errorData = await res.json();
            toast.error(errorData.message || "Something went wrong");
          }

      } catch (error) {
        toast.error("Internal Server Error!!")
         
      }

    } 

  return (
    <>
    <h3>Add transaction</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
            {...register("text")}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter amount...'
            step='0.01'
            {...register("amount")}

          />
          <button className='btn'>Add transaction</button>
        </div> 
    </form>
    </>
  )
}
