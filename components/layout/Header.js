'use client'
import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Bell, Menu  } from 'lucide-react';

import profilePhoto from '@/public/profile.png'

const Header = ({isOpen}) => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if(pathname === '/') {
      return 'Dashboard Overview'
    };

    if(pathname === '/call-logs') {
      return 'Call Logs & History'
    }

    if(pathname === '/appointments') {
      return 'Appointments'
    }

    if(pathname === '/settings') {
      return 'Settings'
    }
  }
  const pageTitle = getPageTitle();

  return (
    <>
    <div className='flex items-center justify-between w-full h-[96px] bg-sidebar bg-black px-6'>

     <div className='flex items-center justify-center gap-4'>
       <Menu onClick={isOpen} className='cursor-pointer md:hidden' />
      <h2 className='font-medium text-white text-xl md:text-3xl'> {pageTitle} </h2>
     </div>

      <div className='flex items-center gap-7'>
        
        <Bell className='w-6 h-6'/>
        <div className='w-12 h-12 rounded-full'>
          <Image src={profilePhoto} layout='responsive' className='w-full' alt='profile' /> 
        </div>
      </div>

    </div>
    </>
  )
}

export default Header