"use client"
import { addCommas } from '@/db/utill';
import useSWR from "swr";
import React from 'react'

export default  function IncomeExpenses() {
  
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/getIncomeExpenses", fetcher);
 
  return (
    <div className='inc-exp-container'>
       <div>
        <h4>Income</h4>
        <p className='money plus'>${addCommas(Number( data?.income?.toFixed(2) ?? 0))}</p>
        </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${addCommas(Number( data?.expenses?.toFixed(2) ?? 0))}</p>
      </div>
    </div>
  )
}
