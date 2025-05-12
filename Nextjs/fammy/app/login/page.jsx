'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/navbar';
import { Comic_Neue, Geist } from 'next/font/google';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"


const comic = Comic_Neue({ weight: '400', subsets: ['latin'] });
const geist = Geist({ weight: '400', subsets: ['latin'] });


export default function Page() {

  const { register, handleSubmit, watch, formState: { error } } = useForm();
  const onSubmit = data => console.log(data);

  const { data: session } = useSession()
  console.log(session)
  

  return (

    <div className="relative min-h-screen bg-gray-100">
      {/*background*/}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-1">
        <img
          src="/images/p2.png"
          alt="Family recipe background"
          className="w-full h-full object-cover blur-sm transform transition duration-300 hover:scale-110"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}
          className={`${comic.className} backdrop-blur-lg rounded-xl max-w-md mx-auto mt-10 border  shadow-4xl w-90`}
        >
          {/* Lordicon Icon */}
          <div className="flex justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/gcufylsm.json"
              trigger="hover"
              className={{ width: '52px', height: '52px' }}
            ></lord-icon>
          </div>

          <div className='px-4'>
            <div className="mb-2">
              <label className="block  text-md font-semibold text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            {/* Date of Birth Input */}
            <div className="mb-2">
              <label htmlFor="dob" className="block text-md font-semibold text-gray-800">
                Date of Birth
              </label>
              <input
                {...register("dob")}
                type="date"
                id="dob"
                name="dob"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            <div className='mb-2'><label className="block text-md font-semibold text-gray-800">Password</label>
              <input {...register("password")} type="password" id="password" name="password" required placeholder='******' className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-500' />
              <a href="https://www.flaticon.com/free-icons/password" title="password icons"></a>
            </div>
            <div className='flex justify-center px-2 flex-col '>
              <button className={`${geist.className} bg-red-500 p-2  hover:bg-black hover:border-t cursor-pointer hover:shadow-lg hover:border-y-lg transition-transform duration-300 justify-center rounded-3xl my-2`}>
                Submit
              </button>
              <p className='text-sm text-gray-700 hover:underline justify-center items-align'>Don't have an account ? Signup</p>
            </div>

          </div>

          <hr className='border border-b-t m-2'></hr>
          <div>
            Not signed in <br />
            <button onClick={() => signIn("github")}>Sign in using Github</button>
            <button onClick={() => signIn("google")}>Sign in using Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

