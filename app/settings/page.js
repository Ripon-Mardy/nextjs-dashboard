import React from 'react'
import Image from 'next/image'

import avater from '@/public/avater.png'

const page = () => {
  return (
    <div className='p-5'>

        {/* profile password  */}
        <div className='flex items-center justify-start gap-[63px]'>
            <button className='font-normal text-[24px] leading-9'>Profile</button>
            <button className='font-normal text-[24px] leading-9'>Password Settings</button>
        </div>

        {/* profile picture  */}
        <div className='mt-[40px]'>
            <h2 className='font-medium text-[20px] text-white'>Profile Image</h2>
            <div className='flex items-end justify-start mt-2'>
            <div className='w-[102px] h-[102px]'>
                <Image src={avater} alt='avater' />
            </div>
            <button className='bg-[linear-gradient(#152252,#111B3C)] py-1 px-2 rounded-[12px] menu-shadow'> Edit Profile </button>
            </div>
        </div>

        {/* information  */}
        <div className='mt-10 flex flex-col gap-4'>
            
            <div className='flex  items-center justify-start gap-2 border-b border-[#192D71] pb-4'>
                <h2 className='font-medium text-[20px]'>Full Name : </h2>
                <p className='font-medium text-[20px] ml-[106px]'>Jane D.</p>
            </div>

             <div className='flex  items-center justify-start gap-2 border-b border-[#192D71] pb-4'>
                <h2 className='font-medium text-[20px] mr-[106px]'>Email:</h2>
                <p className='font-medium text-[20px] '>jane@gmail.com</p>
            </div>

        </div>

    </div>
  )
}

export default page