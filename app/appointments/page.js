import ClientDetails from '@/components/appointments/ClientDetails'
import React from 'react'

import { Calendar, CircleCheckBig , ClockArrowUp, Copy   } from 'lucide-react';

const page = () => {
  return (
    <div className='p-5'>

        {/* dashboard  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

        <div className='bg-[#0F172B80] border border-[#2B7FFF33] rounded-[16px] px-6 py-6 space-y-3'>
        <div className='flex items-center justify-start gap-3'>
          <Calendar className='w-5 h-5 text-[#51A2FF]'/>
          <h2 className='text-[#90A1B9] font-normal text-sm leading-5'>Total Booked</h2>
        </div>
        <span className='text-2xl font-normal leading-8 text-white mt-2 block'>34</span>
        <p className='font-normal text-sm text-[#05DF72] leading-5 block'>+8 this week</p>

      </div>

      <div className='bg-[#0F172B80] border border-[#2B7FFF33] rounded-[16px] px-6 py-6 space-y-3'>
        <div className='flex items-center justify-start gap-3'>
          <CircleCheckBig className='w-5 h-5 text-[#05DF72]'/>
          <h2 className='text-[#90A1B9] font-normal text-sm leading-5'>AI Booked</h2>
        </div>
        <span className='text-2xl font-normal leading-8 text-white mt-2 block'>28</span>
        <p className='font-normal text-sm text-[#90A1B9] leading-5 block'>82% of total</p>

      </div>

      <div className='bg-[#0F172B80] border border-[#2B7FFF33] rounded-[16px] px-6 py-6 space-y-3'>
        <div className='flex items-center justify-start gap-3'>
          <ClockArrowUp className='w-5 h-5 text-[#FDC700]'/>
          <h2 className='text-[#90A1B9] font-normal text-sm leading-5'>Pending</h2>
        </div>
        <span className='text-2xl font-normal leading-8 text-white mt-2 block'>3</span>
        <p className='font-normal text-sm text-[#90A1B9] leading-5 block'>Awaiting confirmation</p>

      </div>

      </div>


      {/* booking list  */}
      <div className='mt-6 rounded-[16px] bg-[linear-gradient(#1A1A2E,#16213E)] p-6'>
        <h2 className='font-normal text-[16px] leading-6'>Booking Link</h2>

          <div className='mt-[16px] flex items-center justify-between gap-3 rounded-[14px] '>
            <div className='bg-[#0A0A0F80] w-[840px] font-normal text-sm leading-6 border border-[#00FF8833] p-3 rounded-xl'> https://techstore.com/book?id=store123 </div>
          <div className='flex items-center justify-center w-fit gap-3 bg-[lianer-gradient(#152252,#111B3C)] text-white shadow-[inset_0px_1px_18px_2px_#D2EAFF80] py-2 px-2 rounded-xl'>
            <Copy className='w-8 h-8' />
            <p className='text-[16px] font-medium'>Copy Link</p>
          </div>
          </div>

      </div>


        <ClientDetails/>
    </div>
  )
}

export default page