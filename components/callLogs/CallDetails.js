import React from 'react'

import { SquarePlay, NotepadText  } from 'lucide-react';

const CallDetails = () => {
  return (
    <div>

      {/* call details  */}
      <div className='bg-[#0F172B80] rounded-2xl border border-[#2B7FFF33]'>
        <div className='px-[17px] py-4 px-4 border-b border-[#2B7FFF33]'>
          <h2 className='font-normal text-xl text-white'>Call Details</h2>
        </div>

        <div className='p-4'>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='space-y-4'>
            <div className='space-y-1'>
            <p className='font-normal text-sm leading-5 text-[#90A1B9]'>Phone Number</p>
            <h2 className='font-normal text-[16px] leading-6'>+1 (555) 123-4567</h2>
          </div>

          <div className='space-y-1'>
             <p className='font-normal text-sm leading-5 text-[#90A1B9]'>Date & Time</p>
            <h2 className='font-normal text-[16px] leading-6'>2025-12-16 10:45 AM</h2>
          </div>
          </div>

          <div className='space-y-4'>

             <div className='space-y-1'>
             <p className='font-normal text-sm leading-5 text-[#90A1B9]'>Duration</p>
            <h2 className='font-normal text-[16px] leading-6'>4:32</h2>
          </div>

           <div className='space-y-1'>
             <p className='font-normal text-sm leading-5 text-[#90A1B9]'>Issue Type</p>
            <h2 className='font-normal text-[16px] leading-6'>Screen</h2>
          </div>

          </div>

          </div>

          {/* call type  */}
          <div className='mt-6'>
            <h2 className='text-[#90A1B9] font-normal text-sm leading-5 mb-[9px]'>Call Type</h2>
            <div className='bg-[linear-gradient(#00C95033,#00BC7D33)] rounded-[10px] border border-[#00C9504D] text-[#05DF72] text-sm leading-5 w-fit py-1 px-3'>AI Resolved</div>
          </div>

          {/* outcome  */}
          <div className='mt-[29px]'>
            <h2 className='text-[#90A1B9] font-normal text-sm leading-5 mb-[2px]'>Outcome</h2>
            <p className='text-white font-normal text-sm leading-6'>Quote provided</p>
          </div>

          {/* play audio recording  */}
          <div className='mt-[24px] bg-[linear-gradient(#AD46FF33,#F6339A33)] flex items-center justify-center gap-2 text-[16px] font-normal w-full h-[50px] rounded-[14px] border border-[#AD46FF4D] text-[#C27AFF]'>
            <SquarePlay className='w-5 h-5'/>
            <span>Play Audio Recording</span>
          </div>

          {/* conversation transcript  */}
          <div className='mt-[22px]'>

            <div className='flex items-center justify-start gap-1'>
              <NotepadText className='w-5 h-5 text-[#51A2FF]' />
              <h2 className='font-normal text-[16px] leading-6 text-white'>Conversation Transcript</h2>
            </div>

            <div className='bg-[#1D293D80] max-w-[515px] rounded-[14px] pt-4 px-4 space-y-3 mt-3'>

              <div className='space-y-1'>
                <h2 className='text-[#05DF72] font-normal text-sm leading-5'>AI Assistant:</h2>
                <p className='font-medium text-white text-xs leading-5'>Thank you for calling UBreakiFix! How can I help you today?</p>
              </div>

              <div className='space-y-1'>
                <h2 className='text-[#51A2FF] font-normal text-sm leading-5'>Customer:</h2>
                <p className='font-medium text-white text-xs leading-5'>Thank you for calling UBreakiFix! How can I help you today?</p>
              </div>

              <div className='space-y-1'>
                <h2 className='text-[#51A2FF] font-normal text-sm leading-5'>AI Assistant:</h2>
                <p className='font-medium text-white text-xs leading-5'>I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
              </div>

              <div className='space-y-1'>
                <h2 className='text-[#51A2FF] font-normal text-sm leading-5'>Customer:</h2>
                <p className='font-medium text-white text-xs leading-5'>Yes, please! When are you available?</p>
              </div>

               <div className='space-y-1'>
                <h2 className='text-[#51A2FF] font-normal text-sm leading-5'>AI Assistant:</h2>
                <p className='font-medium text-white text-xs leading-5'>Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
              </div>  


            </div>

          </div>
          
        </div>

      </div>
        
    </div>
  )
}

export default CallDetails