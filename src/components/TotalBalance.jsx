"use client"
import { addCommas } from '@/db/utill';
import React from 'react'
import useSWR from 'swr';

export default function TotalBalance() {
 
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/gettotalbalance", fetcher);

  return (
    
    <div className='inc-exp-container flex flex-col'>
    <h4 className='mt-4 '>Your Balance</h4>
   <p className={`${data?.totalbalance>=0? "money plus":"money minus" }`}>${addCommas(Number(data?.totalbalance?.toFixed(2) ?? 0))}</p>
   </div>
  )
}
