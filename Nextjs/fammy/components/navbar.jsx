import React from 'react';
import 'K:/GitHub/Canteen-Ordering-System/CustomerPage/src/App.css'
import { Roboto, Geist, Comic_Neue } from "next/font/google";
import Link from 'next/link';

const geistSans = Geist({
      variable: "--font-geist-sans",
      subsets: ["latin"],
    });
    const comic = Comic_Neue({
      weight: "700",
      subsets: ["latin"],
    });
    const roboto = Roboto({
      weight: "500",
      subsets: ["latin"],
    });

const Navbar = () => {
    
  return (
   <div className='absolute top-0 w-screen z-25 fixed '>
    <nav className=" z-50 bg-pink-200 border-b border-white/10">
           <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
             <div className="flex items-center justify-between h-16">
   
               {/* Left Section - Logo */}
               <div className={`${comic.className} flex items-baseline space-x-2`}>
                 <h1 className="text-3xl font-bold text-black cursor-pointer">
                   FAMMY
                   <span className={`hover:opacity-0 duration-300 ${roboto.className} text-yellow-500 ml-1`}>
                     .com
                   </span>
                 </h1>
               </div>
   
               {/* Right Section - Icons */}
               <div className="flex items-center gap-4">
                 <Link href='https://github.com/KrishnaMohanty08/learningWebDev/tree/main/Nextjs/fammy'><lord-icon
                   src="https://cdn.lordicon.com/jjxzcivr.json"
                   trigger="hover"
                   className="cursor-pointer hover:scale-110 transition-transform"
                   style={{ width: "55px", height: "25px" }}>
                 </lord-icon></Link>
                 <Link href='/login'>
                 <lord-icon
                   src="https://cdn.lordicon.com/kdduutaw.json"
                   trigger="hover"
                   className="cursor-pointer hover:scale-110 transition-transform"
                   style={{ width: "25px", height: "25px" }}>
                 </lord-icon></Link>
               </div>
             </div>
           </div>
    </nav>
    </div>
  );
};

export default Navbar;