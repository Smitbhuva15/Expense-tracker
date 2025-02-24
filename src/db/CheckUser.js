
import { NextResponse } from 'next/server';
import React from 'react'
import prisma from './index';
import { currentUser } from '@clerk/nextjs/server';


export async function CheckUser() {
   const user = await currentUser();
   // console.log(user);

   if (!user) {
      return new NextResponse({ message: "user is not found" }, { status: 404 })
   }

   const loggedInUser = await prisma.user.findUnique({
      where: {
         clerkUserId: user?.id,
      },
   });

   if (loggedInUser) {
      return new NextResponse({ message: "user already exist" }, { status: 200 })
   }

   const createuser = await prisma.user.create({
      data: {
         clerkUserId: user.id,
         name: `${user.firstName} ${user.lastName}`,
         imageUrl: user.imageUrl,
         email: user.emailAddresses[0].emailAddress,
      },
   })
   return new NextResponse({ message: "user created succesfully!!" }, { status: 200 })
}
