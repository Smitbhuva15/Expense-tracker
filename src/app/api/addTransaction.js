import prisma from '@/db';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(req) {
   try {
    const user=await currentUser();
    const {text,amount}=await req.json();
    const amount2=Number(amount)

    const addtransaction=await prisma.transaction.create({
        text:text,
        amount:amount2,
        userId:user._id
    })

      return new NextResponse({ message: "Transaction successFull !!" }, { status: 200 })
    
   } catch (error) {
    return new NextResponse({ message: "Internal Server Error!!" }, { status: 500 })
   }

}
