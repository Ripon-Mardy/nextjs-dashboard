'use client'
import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Bell } from 'lucide-react';

import profilePhoto from '@/public/profile.png'

const Header = () => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if(pathname === '/') {
      return 'Dashboard Overview here'
    };

    if(pathname === '/call-logs') {
      return 'Call Logs & History'
    }

    if(pathname === '/appointments') {
      return 'Appointments'
    }
  }
  const pageTitle = getPageTitle();
  return (
    <>
    <div className='flex items-center justify-between w-full h-[96px] bg-sidebar bg-black px-6'>

      <h2 className='font-medium text-white text-3xl'> {pageTitle} </h2>

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