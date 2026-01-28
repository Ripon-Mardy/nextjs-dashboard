// components/CallList.jsx
"use client";

import React from "react";
import { Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";

// Sample data (you can replace with real data from API / props)
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
            <div key={index}>

              <div>
                <div>
                  <Phone />
                </div>
                <div>
                  <h2> {list?.phone} </h2>
                  <p> {list?.time} </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallList;
