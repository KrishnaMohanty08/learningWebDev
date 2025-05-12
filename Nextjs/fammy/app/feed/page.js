"use client";
import "../globals.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Roboto, Geist, Comic_Neue } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const comic = Comic_Neue({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const data = [
    {
      title: "FitiQue",
      disc: "It is a React website",
      tech_stack: ["React", "Tailwind"],
      repolink: "https://github.com/example/project1",
    },
    {
      title: "FitiQue",
      disc: "It is a React website",
      tech_stack: ["React", "Tailwind"],
      repolink: "https://github.com/example/project2",
    },
    {
      title: "FitiQue",
      disc: "It is a React website",
      tech_stack: ["React", "Tailwind"],
      repolink: "https://github.com/example/project3",
    },
    {
      title: "FitiQue",
      disc: "It is a React website",
      tech_stack: ["React", "Tailwind"],
      repolink: "https://github.com/example/project4",
    },
  ];

  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);

  const clickedMe = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200); 
  }, []);

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-19 py-24 [background:radial-gradient(180%_145%_at_10%_0%,#000_50%,#63e_120%)]"></div>

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <lord-icon
            src="https://cdn.lordicon.com/ydhnbgpj.json"
            trigger="loop"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </div>
      ) : (
        <div>
          {/* Header */}
          
          <div className={`${comic.className} flex justify-center relative`}>
            <h1
              onClick={clickedMe}
              className="relative cursor-pointer justify-center items-center text-3xl py-2 font-bold"
            >
              FAMMY
              <span
                className={`hover:opacity-0 duration-1000 ${roboto.className} text-yellow-500`}
              >
                .com
              </span>
            </h1>
            {showWarning && (
              <span className="absolute border-2 bg-red-500 font-semibold border-red-500 left-[18rem] top-[41px] p-2 rounded-xl z-10">
                Don't you dare<br />
                to touch me
              </span>
            )}
          </div>
          {/* Cards Section */}
          <div className="flex flex-wrap gap-4 justify-center m-4 px-2 box ">
            {data.map((item, index) => (
              <div key={index} className="containers">
                <div className="px-2 text-center align-top">
                  <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                  <p className="mb-2">{item.disc}</p>
                  {item.tech_stack.length > 0 && (
                    <h3 className="mb-2">
                      Tech Stack: {item.tech_stack.join(", ")}
                    </h3>
                  )}
                  {item.repolink && (
                    <a
                      href={item.repolink}
                      className="text-blue-300 underline hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo link
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
