import React from 'react';
import SelectedListItem from './SelectedListItem';
import {useSesssion,signOut} from 'next-auth/react'

const Sidebar = () => {
    
  return (
    <div className='absolute fixed left-0 top-16 h-screen bg-black z-40 text-white p-2'>
      <SelectedListItem/>

    </div>
  )
}

export default Sidebar
