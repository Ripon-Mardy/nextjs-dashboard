// components/RepairRequestsTable.jsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';




const mockData = [
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "09:00 AM"
  },
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "10:00 AM"
  },
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "11:00 AM"
  },
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "12:00 PM"
  },
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "02:00 PM"
  },
  {
    "clientName": "Jane.D",
    "clientPhone": "01966865765",
    "clientMail": "admin@gmail.com",
    "device": "Apple/iPhone 13 pro",
    "repairType": "Screen",
    "date": "02/06/2026",
    "slotNo": 1,
    "startTime": "03:00 PM"
  },
  // ... repeat this pattern to reach 66 items (or use your real data)
  // For demo, we'll use Array.from below to generate 66 items automatically
];

// Generate 66 items dynamically (same as your screenshot)
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

export default function ClientDetails() {
  const [currentPage, setCurrentPage] = useState(2);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(generatedMockData.length / itemsPerPage);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = generatedMockData.slice(startIndex, endIndex);

  // Pagination handler
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Generate page numbers with ellipsis to match screenshot (shows 1 2 3 4 5 ... 11 on page 2)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Show first 5 pages when near start

    if (totalPages <= maxVisible + 2) {
      // Few pages: show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show page 1
      pages.push(1);

      // Ellipsis if current is > 4
      if (currentPage > 4) pages.push('...');

      // Show pages around current (adjusted to show up to +3 for page 2 match)
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 3);
      for (let i = start; i <= end; i++) pages.push(i);

      // Ellipsis if current < total - 4
      if (currentPage < totalPages - 4) pages.push('...');

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="bg-[#0F172B] rounded-2xl border border-[#2B7FFF33]">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#2B7FFF33] bg-[#1E293B]/80">
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Client Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Client Phone</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Client mail</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Device</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Repair Type</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Slot no</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Start Time</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#2B7FFF33] hover:bg-[#1E293B]/50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-white text-sm">{item.clientName}</td>
                <td className="px-6 py-4 text-white text-sm">{item.clientPhone}</td>
                <td className="px-6 py-4 text-white text-sm">{item.clientMail}</td>
                <td className="px-6 py-4 text-white text-sm">{item.device}</td>
                <td className="px-6 py-4 text-white text-sm">{item.repairType}</td>
                <td className="px-6 py-4 text-white text-sm">{item.date}</td>
                <td className="px-6 py-4 text-white text-sm">{item.slotNo}</td>
                <td className="px-6 py-4 text-white text-sm">{item.startTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination – exact design match */}
      <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B7FFF33] text-sm text-gray-400">
        {/* Previous */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white transition-colors"
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {pageNumbers.map((page, idx) => (
            <span
              key={idx}
              onClick={() => typeof page === 'number' && paginate(page)}
              className={`
                px-3 py-1 rounded-md transition-colors cursor-pointer
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

        {/* Next */}
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
}