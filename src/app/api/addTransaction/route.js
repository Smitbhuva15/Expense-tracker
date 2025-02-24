import prisma from '@/db';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import React, { use } from 'react'

export async function POST(req) {
   try {
      const user = await currentUser();
      if (!user || !user.id) {
         return NextResponse.json({ message: "User not found" }, { status: 401 });
      } 
    const {text,amount}=await req.json();
    const amount2=Number(amount)
    const addtransaction=await prisma.transaction.create({
       data:{
         text:text,
         amount:amount2,
         userId:user.id
       }
    })

      return  NextResponse.json({ message: "Transaction successFull !!" }, { status: 200 })
    
   } catch (error) {
    return NextResponse.json({ message: "Internal Server Error!!" }, { status: 500 })
   }

}
