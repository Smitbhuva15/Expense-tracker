import prisma from '@/db';
import { addCommas } from '@/db/utill';
import React from 'react'
import { useSWRConfig } from 'swr';

export default function TransactionItem({ data }) {
 
  const { mutate } = useSWRConfig();
  const sign = data.amount >= 0 ? "+" : "-";
  const handleDeleteTransaction = async (id) => {
    const res = await fetch(`/api/delete/transaction/${id}`, {
      method: 'DELETE'
    })
    mutate('/api/allTransaction')
    mutate('/api/getIncomeExpenses')
    mutate('/api/gettotalbalance')
  }

  return (
    <li className={data.amount < 0 ? 'minus' : 'plus'}>
      {data.text}
      <span>
        {sign}${addCommas(Math.abs(data.amount))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(data.id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  )
}
