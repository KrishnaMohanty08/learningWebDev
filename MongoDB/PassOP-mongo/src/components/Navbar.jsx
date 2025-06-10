import React from 'react'

const navBar = () => {
  return (
    <nav className='bg-green-600 flex justify-around items-center align-bottom my-auto text-lg py-2'>
        
        <div className='logo font-bold gap-9 justify-between'>
        <span className="text-red-600">&lt;</span>
        <span className='text-white'>Pass<span className='text-black'>OP</span></span>
        <span className='text-red-600'>/&gt;</span>
        </div>

      <ul>
        <li className='flex gap-9 justify-between'>
            <a className='hover:font-semibold hover:text-white ' href="#">Home</a>
            <a className='hover:font-semibold hover:text-white' href="#">Contact</a>
            <a className='hover:font-semibold hover:text-white' href="#">About</a>
        </li>
      </ul>
      <a className='cursor-pointer' href="https://github.com/KrishnaMohanty08/learningWebDev/tree/main/React/">
        <img className='w-8 px--8' src="/github.png"/>
      </a>
    </nav>
  )
}

export default navBar
