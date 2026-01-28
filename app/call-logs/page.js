import React from 'react'

import { Search, ChevronDown } from 'lucide-react';
import CallList from '@/components/callLogs/CallList';

const page = () => {
  return (
    <div className='mt-[40px] ml-[24px] mr-[24px]'>

        {/* search bar  */}
        <div className='flex items-center justify-between'>
            
            <div className='flex items-center justify-center gap-2 bg-[#0F172B80] border border-[#2B7FFF33] w-[512px] h-[50px] rounded-[14px] pl-[42px]'>
                <Search className='w-[20px] h-[20px] text-[#90A1B9]'/>
                <input type='text' className='w-full outline-none text-[16px] font-normal' placeholder='Search by phone number, issue type...' />
            </div>



            
           <div className='flex items-center justify-center gap-5'>
             <button
              className="flex items-center justify-center gap-2 bg-[#0F172B80] py-3 p-8 rounded-xl text-[16px] font-normal text-white border border-[#2B7FFF33]"
            >
              <span>All Type</span>
              <ChevronDown size={18} className="text-gray-400" />
            </button>

            <button
              className="flex items-center justify-center gap-2 bg-[#0F172B80] py-3 p-8 rounded-xl text-[16px] font-normal text-white border border-[#2B7FFF33]"
            >
              <span>All Issues</span>
              <ChevronDown size={18} className="text-gray-400" />
            </button>

            <button
              className="flex items-center justify-center gap-2 bg-[#0F172B80] py-3 p-8 rounded-xl text-[16px] font-normal text-white border border-[#2B7FFF33]"
            >
              <span>Today</span>
              <ChevronDown size={18} className="text-gray-400" />
            </button>
           </div>


            



        </div>

        {/* call list  */}
        <div className='mt-[38px]'>
            <CallList/>
        </div>




    </div>
  )
}

export default page