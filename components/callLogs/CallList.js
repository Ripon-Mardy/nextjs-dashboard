"use client";

import React from "react";
import { Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";


const callListData = [
  {
    phone: "+1 (555) 345-6789",
    time: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "bg-green-600/30 text-green-400 border-green-500/40",
    action: "Quote Provided",
    issue: "Screen",
  },
  {
    phone: "+1 (555) 345-6789",
    time: "2025-12-16 • 09:04 AM",
    duration: "5:23",
    status: "Warm Transfer",
    statusColor: "bg-orange-600/30 text-orange-400 border-orange-500/40",
    action: "Escalated to technician",
    issue: "Software",
  },
  {
    phone: "+1 (555) 345-6789",
    time: "2025-12-16 • 09:04 AM",
    duration: "5:23",
    status: "Appointment",
    statusColor: "bg-blue-600/30 text-blue-400 border-blue-500/40",
    action: "Appointment Booked",
    issue: "Battery",
  },
  {
    phone: "+1 (555) 345-6789",
    time: "2025-12-16 • 09:42 AM",
    duration: "0:20",
    status: "Dropped",
    statusColor: "bg-red-600/30 text-red-400 border-red-500/40",
    action: "Call Dropped",
    issue: "Unknown",
  },
  {
    phone: "+1 (555) 345-6789",
    time: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "bg-green-600/30 text-green-400 border-green-500/40",
    action: "Quote Provided",
    issue: "Screen",
  },
];

const CallList = () => {
  return (
    <div>
      <div className="bg-[#0F172B80] h-[643px] rounded-xl border border-[#2B7FFF33]">
        <div className="px-4 py-4 border-b border-[#2B7FFF33]">
          <h2 className="text-xl font-medium text-white">Call List</h2>
        </div>

        <div>
          {callListData.map((list, index) => (
            <div key={index} className="px-4 py-4 border-b border-[#2B7FFF33] last:border-0">

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start justify-start gap-3">

                <div className="bg-[linear-gradient(#2B7FFF,#00B8DB)] w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <Phone className="w-[20px] h-[20px] " />
                </div>
                <div className="flex items-center justify-between flex-col gap-0.5">
                  <h2 className="text-[16px] font-normal text-white"> {list?.phone} </h2>
                  <p className="text-[#90A1B9] text-xs font-normal"> {list?.time} </p>
                </div>

              </div>

              <div className={`${list?.statusColor} p-2 rounded-xl text-xs font-normal`}> {list?.status} </div>
              </div>

              <div className="flex items-center justify-start gap-3 text-xs mt-[20px]">
                <span className="flex items-center justify-center gap-1 text-[#90A1B9]"> <Clock className="w-[16px] h-[16px]"/>  {list?.duration} </span>
                <span className="flex items-center justify-center gap-1 text-[#90A1B9]"> <CheckCircle className="w-[16px] h-[16px]"/> {list?.action} </span>
                <span className="flex items-center justify-center gap-1 text-[#90A1B9] bg-[#2B7FFF33] py-0.5 px-2 rounded-sm"> {list?.issue} </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallList;
