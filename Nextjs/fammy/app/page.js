"use client";
import "./globals.css";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Roboto, Geist, Comic_Neue } from "next/font/google";

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

export default function Home() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-150 w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

      {/* Navbar Container */}
      <Navbar/>
      {/*Blog display */}
      <main className="m-2">
        <div className="flex my-5 text-black p-2 ">
          <div className="duration-300 flex p-1 m-2 border-b border-r border-black rounded-xl shadow-lg ">
            <Image src='/images/p1.png' width={1000} height={750} alt="family photo" className="transform trasition duration-100 cursor-pointer hover:scale-105 rounded-xl"></Image>
          </div>
          <div className="flex-row  border rounded-xl bg-blur-md shadow-lg p-2">
            <h4 className={`${comic.className}  px-2`}>A private social platform for families to stay connected, share memories, and organize events.</h4>
            <h3 className={`${roboto.className} text-yellow-500 text-3xl  px-2`}>Why?</h3>
            <h4 className={`${comic.className}  px-2`}>Families often struggle to stay in touch across generations or distances. Fammy.com can be a safe, private space for family members to communicate and preserve memories.</h4>
          </div>
        </div>
        <div className="flex text-black gap-4">
          {/* Features List */}
          <div className="flex flex-col border rounded-xl bg-white/80 shadow-lg  backdrop-blur-md shadow-lg p-4 min-w-[320px]">
            <h2 className=" justify-center mb-2 text-2xl">Features</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li className={`${geistSans.className} hover:animate-pulse`}>
                User Profiles: <span className={comic.className}>Each family member creates a profile with basic info (name, relation, birthday, etc.).</span>
              </li>
              <li className={`${geistSans.className} hover:animate-pulse`}>
                Family Feed: <span className={comic.className}>Share posts, photos, or videos with family members.</span>
              </li>
              <li className={`${geistSans.className} hover:animate-pulse`}>
                Photo Albums: <span className={comic.className}>Upload and organize family photos in shared albums.</span>
              </li>
              <li className={`${geistSans.className} hover:animate-pulse`}>
                Event Planner: <span className={comic.className}>Create and manage family events (e.g., reunions, birthdays) with RSVP functionality.</span>
              </li>
              <li className={`${geistSans.className} hover:animate-pulse`}>
                Private Chat: <span className={comic.className}>Simple messaging for family members.</span>
              </li>
            </ol>
          </div>

          {/* Image Section */}
          <div className="flex p-1 m-2 border-b border-l shadow-lg  border-black rounded-xl shadow-lg items-center">
            <Image
              src="/images/p2.png"
              width={400}
              height={625}
              alt="family photo"
              className="transition-transform duration-300 cursor-pointer hover:scale-105 rounded-xl"
            />
          </div>
        </div>

      </main>
    </>
  );
}
