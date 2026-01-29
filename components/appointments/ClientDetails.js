'use client'
import React, {useState} from "react";

import { ChevronLeft, ChevronRight } from 'lucide-react';

const generatedMockData = Array.from({ length: 66 }, (_, i) => {
  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  return {
    clientName: 'Jane.D',
    clientPhone: '01966865765',
    clientMail: 'admin@gmail.com',
    device: 'Apple/iPhone 13 pro',
    repairType: 'Screen',
    date: '02/06/2026',
    slotNo: 1,
    startTime: times[i % times.length],
  };
});

const tableHeadData = [
  "Client Name",
  "Client Phone",
  "Client mail",
  "Device",
  "Repair Type",
  "Date",
  "Slot no",
  "Start Time",
];

const ClientDetails = () => {

   const [currentPage, setCurrentPage] = useState(2); // Start at page 2 to match screenshot
  
    const itemsPerPage = 6;
    const totalPages = Math.ceil(generatedMockData.length / itemsPerPage);
  
    // Calculate slice indices
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = generatedMockData.slice(startIndex, endIndex);
  
    // Pagination handler
    const paginate = (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    };
  

    const getPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;
  
      if (totalPages <= maxVisible + 2) {
        // Few pages: show all
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {

        pages.push(1);

        if (currentPage > 4) pages.push('...');
  

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 3);
        for (let i = start; i <= end; i++) pages.push(i);
  

        if (currentPage < totalPages - 4) pages.push('...');

        pages.push(totalPages);
      }
  
      return pages;
    };
  
    const pageNumbers = getPageNumbers();

  return (
    <div>
      {/* table  */}
      <div className="bg-[#111B3B] mt-10 rounded-2xl border border-[#162F61]">
        <table className="w-full rounded-xl border-collapse">
         <thead>
            <tr className="border-b border-[#2B7FFF33] bg-[#1E293B] px-4">
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Client Name</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Client Phone</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Client mail</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Device</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Repair Type</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Date</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Slot no</th>
              <th className="py-4 px-2 border-b border-[#2B7FFF33] font-normal text-sm text-gray-300 leading-5 text-center">Start Time</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="py-6  px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.clientName}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.clientPhone}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.clientMail}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.device}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.repairType}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.date}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.slotNo}
                </td>
                <td className="py-6 px-5 border-b border-[#2B7FFF33] font-normal text-sm text-[#E2E8F0] leading-5 text-center">
                  {item.startTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* pagination  */}

        <div className="px-2 py-4 mt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 w-[521px] mx-auto">

        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white transition-colors"
        >
          <ChevronLeft size={16} />
          Previous
        </button>


        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {pageNumbers.map((page, index) => (
            <span
              key={index}
              onClick={() => typeof page === 'number' && paginate(page)}
              className={`
                px-2 py-1 rounded-md transition-colors cursor-pointer
                ${currentPage === page
                  ? 'bg-[#2B7FFF33] text-[#2B7FFF] font-bold underline underline-offset-4'
                  : typeof page === 'number'
                  ? 'hover:bg-[#2B7FFF11] hover:text-white'
                  : 'cursor-default text-gray-500'}
              `}
            >
              {page}
            </span>
          ))}
        </div>

        {/* next */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white transition-colors"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>



    </div>
  );
};

export default ClientDetails;
