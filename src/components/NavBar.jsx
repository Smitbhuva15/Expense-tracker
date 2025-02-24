import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { CheckUser } from '@/db/CheckUser'

export default async function NavBar() {
  await CheckUser();
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div>
          <h2>Expense Tracker</h2>
        </div>
        <div >
          <div className='flex'>
            <SignedOut >
              <div className='mr-4'>
                <SignInButton />
              </div>
              <div>
                <SignUpButton />
              </div>
            </SignedOut>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>

        </div>
      </div>
    </nav>
  )
}
