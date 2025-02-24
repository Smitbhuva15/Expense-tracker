import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/db';
import { NextResponse } from 'next/server';

export async function GET() {

    const user = await currentUser();

    if (!user || !user.id) {
        return NextResponse.json({ message: "User not found" }, { status: 401 });
    }
    try {
        const transaction = await prisma.transaction.findMany({
            where: {
                userId: user.id
            }
        })

        return NextResponse.json({ message: "Get Data successFull !!",
            transaction
         }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ message: "Not get all data Internal Server Error!!" }, { status: 500 })

    }




}
