"use client"
import React from 'react'
import useSWR from 'swr';
import TransactionItem from './TransactionItem';

export default function AllTransaction() {

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, mutate } = useSWR("/api/allTransaction", fetcher);
   
    return (
        <>
            <h3>History</h3>
            <ul className='list'>
                {
                data && data.transaction.length > 0 &&(
                    data.transaction.map((item)=>(
                       <TransactionItem key={item.id} data={item}/>
                    ))
                )

                }
            </ul>

        </>
    )
}
