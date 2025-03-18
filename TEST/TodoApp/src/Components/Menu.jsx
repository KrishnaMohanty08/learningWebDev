import React from 'react';

const Menu = () => {
    return (
        <>
            <div className="bg-blue-300 shadow-md rounded-lg p-4  h-screen m-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-black text-3xl font-semibold">Menu</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Search Section */}
                <div className="flex items-center bg-yellow-50 p-2 rounded-lg shadow-md mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-5 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-lg w-full h-10 px-2 border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tasks Section */}
                <div className="mt-6">
                    <h4 className="text-black font-semibold text-lg mb-3">Tasks</h4>

                    <div className="space-y-3">
                        {/* UPCOMING */}
                        <button className="flex items-center gap-2 bg-yellow-100 text-black font-semibold px-4 py-2 rounded-lg w-full shadow-md tasks ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            UPCOMING
                        </button>

                        {/* TODAY */}
                        <button className="flex items-center gap-2 bg-yellow-100 text-black font-semibold px-4 py-2 rounded-lg w-full shadow-md tasks">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            Today
                        </button>

                        {/* CALENDAR */}
                        <button className="flex items-center gap-2 bg-yellow-100 text-black font-semibold px-4 py-2 rounded-lg w-full shadow-md tasks">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                            </svg>
                            Calendar
                        </button>
                    </div>
                </div>
                {/* Functions */}
                <div className="function flex flex-col items-start space-y-2">
                    <h4 className="text-black pt-4 font-semibold text-lg mb-3">Functions</h4>
                    <button className="flex items-center justify-center gap-2 bg-green-100 text-green-500 font-semibold px-4 py-2 rounded-lg w-1/3 shadow-md">
                        Add
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-white text-red-500 font-semibold px-4 py-2 rounded-lg shadow-md ">
                        Update
                    </button>
                    <button className=" items-center justify-center bg-black text-red-500 font-semibold px-4 py-2 rounded-lg w-full shadow-md ">
                        Delete
                    </button>
                </div>

            </div>
        </>
    );
}

export default Menu;
