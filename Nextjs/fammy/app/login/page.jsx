'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/navbar';
import { Comic_Neue, Geist } from 'next/font/google';
import Country from '../../components/country.jsx'
import { useSession, signIn, signOut } from "next-auth/react"


const comic = Comic_Neue({ weight: '400', subsets: ['latin'] });
const geist = Geist({ weight: '400', subsets: ['latin'] });

export default function Page() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = data => console.log(data);

  const { data: session } = useSession()
  console.log(session)

  const isValid = (password) => {
    return (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[1-9]/.test(password));

  }

  return (

    <div className="relative h-screen-10  bg-gray-100">
      {/*background*/}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-1">
        <img
          src="/images/p2.png"
          alt="Family recipe background"
          className="w-full h-full object-cover blur-sm transform transition duration-300 hover:scale-110"
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}
          className={` mt-22 backdrop-blur-lg rounded-xl max-w-md mx-auto mt-10 border  shadow-4xl w-90`}
        >
          {/* Lordicon Icon */}
          <div className="flex justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/gcufylsm.json"
              trigger="hover"
              className={{ width: '52px', height: '52px' }}
            ></lord-icon>
          </div>

          <div className='p-3'>
            <div className="mb-2 flex flex-row items-center gap-2">
              <label className=" text-lg font-semibold text-gray-800">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: { value: true, message: "required field" }, minLength: { value: 5, message: "should be more than 5 character" } })}
                className={` ${comic.className} w-full p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500`}

              />
              {errors.name && <div className='text-red-500 text-sm'>{errors.name.message}</div>}
            </div>

            {/* Date of Birth Input */}
            <div className="mb-2 flex flex-row items-center gap-2">
              <label htmlFor="dob" className=" text-md font-semibold text-gray-800">
                Date of Birth:
              </label>
              <input
                {...register("dob", { required: true })}
                type="date"
                id="dob"
                name="dob"
                className={`${comic.className} w-full p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500`}

              />
            </div>

            <div className='mb-2 flex flex-row items-center gap-2'>
              <label className="text-md font-semibold text-gray-800">Password</label>
              <input
                {...register("password", {
                  required: { value: true, message: "Password required" },
                  validate: value =>
                    isValid(value) || "Enter a strong password"
                })}
                type="password"
                id="password"
                name="password"
                placeholder='******'
                className='w-full p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500'
              />
              <a href="https://www.flaticon.com/free-icons/password" title="password icons"></a>
              {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
            </div>
            <Country />
            <div className={`flex justify-center px-2 flex-col ${comic.className}`}>

              <button disabled={isSubmitting} className={`${geist.className} bg-red-500 p-2  hover:bg-black hover:border-t cursor-pointer hover:shadow-lg hover:border-y-lg transition-transform duration-300 justify-center rounded-3xl my-2`}>
                Submit
              </button>

            </div>

          </div>
        </form>
        <hr className='border border-b-t m-7'></hr>
        <p className=' flex text-md text-gray-200 hover:underline justify-center items-align'>Don't have an account ? Signup</p>

        <div className='flex justify-center items-align flex-row gap-6 text-black'>
          {session ? (
            <div className="flex flex-col items-center gap-2">
              <p className={`${comic.className} text-sm text-gray-800`}>Welcome, {session.user?.name || session.user?.email}!</p>
              <button
                onClick={() => signOut()}
                className='flex gap-1 cursor-pointer bg-white p-2 rounded-xl'
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => signIn("github",{callbackUrl:"/feed"})} className='flex gap-1 cursor-pointer bg-white p-3 my-2 rounded-xl'>
                <img src='./images/github.png' className='w-4' /> Github
              </button>
              <button onClick={() => signIn("google")} className='flex gap-1 cursor-pointer bg-white p-3 my-2 rounded-xl'>
                <img src='./images/google.png' className='w-4' /> Google
              </button>
            </>
          )}
        </div>


      </div>
    </div>
  );
};

