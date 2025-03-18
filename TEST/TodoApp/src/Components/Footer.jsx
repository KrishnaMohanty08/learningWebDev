import React from 'react'

const Footer = () => {
    return (
        <div>
            <hr className="border-t-2 border-gray-200 my-1 w-full" />
            <hr className="border-t-2 border-gray-200 my-1 w-full" />
            <div className='Footer flex flex-col items-center'>

                <div className="flex flex-row md:flex-row md:justify-between w-full max-w-6xl p-4">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold">Contact us</h5>
                        <p>91+ 123456781 <br />91+ 0982-3456</p>
                        <a > Gmail: mohanfitiQue@gmail.com</a>
                    </div>
                    
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold">Legal</h5>
                        <a href='https://www.planetfitness.com/privacy-policy' className="block text-blue-500 hover:underline">Privacy Policy</a>
                    </div>
                </div>

                <hr className="border border-gray-300 opacity-100 w-full" />
            </div>
        </div>
    )
}

export default Footer