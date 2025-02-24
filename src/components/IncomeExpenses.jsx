"use client"
import { addCommas } from '@/db/utill';
import React, { useEffect, useState } from 'react'

export default  function IncomeExpenses() {
  const [income , setIncome]=useState(0);
  const [expenses , setExpenses]=useState(0);

   
      const getinfo=async()=>{
        try {
          const res=await fetch('/api/getIncomeExpenses',{
              method:'GET',
             })
            
          
             if (res.ok) {
              const responseData = await res.json(); 
              setExpenses(Math.abs(responseData.expenses))
              setIncome(responseData.income);
              console.log(responseData.message);
            } else {
              const errorData = await res.json();
              console.log(errorData.message || "Something went wrong");
            }
  
        } catch (error) {
          console.log("Internal Server Error!!")
        }
      }

      useEffect(()=>{
        getinfo();
      },[])

  return (
    <div className='inc-exp-container'>
       <div>
        <h4>Income</h4>
        <p className='money plus'>${addCommas(Number(income?.toFixed(2)))}</p>
        </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${addCommas(Number(expenses?.toFixed(2)))}</p>
      </div>
    </div>

  )
}
