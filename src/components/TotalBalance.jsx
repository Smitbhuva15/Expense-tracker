"use client"
import { addCommas } from '@/db/utill';
import React, { useEffect, useState } from 'react'

export default function TotalBalance() {
  const [balance, setBalance] = useState(0);

  const getinfo = async () => {
    try {
      const res = await fetch('/api/gettotalbalance', {
        method: 'GET',
      })


      if (res.ok) {
        const responseData = await res.json();
        setBalance(responseData.totalbalance);
        console.log(responseData.totalbalance)
        console.log(responseData.message);
      } else {
        const errorData = await res.json();
        console.log(errorData.message || "Something went wrong");
      }

    } catch (error) {
      console.log("Internal Server Error!!")
    }
  }

  useEffect(() => {
    getinfo();
  }, [])

  return (
    
    <div className='inc-exp-container flex flex-col'>
    <h4 className='mt-4 '>Your Balance</h4>
   <p className={`${balance>=0? "money plus":"money minus" }`}>${addCommas(Number(balance?.toFixed(2) ?? 0))}</p>
   </div>
  )
}
