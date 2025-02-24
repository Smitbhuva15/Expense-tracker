import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expenses Tracker",
  description: "Track Expenses",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <NavBar />
          <main className='container'>
            {children}
          </main>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </body>
      </html>
    </ClerkProvider>

  );
}
