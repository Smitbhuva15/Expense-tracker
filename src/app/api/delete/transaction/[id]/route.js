import prisma from '@/db'
import { NextResponse } from 'next/server';
import React from 'react'

export async function DELETE(req,{params}) {
    const {id}=params;
   
    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

 const res=await prisma.transaction.delete({
    where:{
        id
    }
 })

 return NextResponse.json({ message: "Transaction deleted SuccesFully !!",}, { status: 200 })
}
