import React from 'react'


import {
  Phone,
  Bot,
  ArrowLeftRight,
  Calendar,
  XCircle,
  Clock
} from "lucide-react";

const dashboardCards = [
  {
    id: 1,
    title: "Total Calls Today",
    value: 127,
    change: "+12%",
    trend: "up",
    icon: Phone,
    iconBg: "bg-sky-500",
  },
  {
    id: 2,
    title: "AI-Handled Calls",
    value: 98,
    change: "+77%",
    trend: "up",
    icon: Bot,
    iconBg: "bg-fuchsia-500",
  },
  {
    id: 3,
    title: "Warm Transfer",
    value: 23,
    change: "+18%",
    trend: "up",
    icon: ArrowLeftRight,
    iconBg: "bg-orange-500",
  },
  {
    id: 4,
    title: "Appointments Booked",
    value: 34,
    change: "+8%",
    trend: "up",
    icon: Calendar,
    iconBg: "bg-emerald-500",
  },
  {
    id: 5,
    title: "Missed / Failed Calls",
    value: 6,
    change: "-3%",
    trend: "down",
    icon: XCircle,
    iconBg: "bg-red-500",
  },
  {
    id: 6,
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    trend: "up",
    icon: Clock,
    iconBg: "bg-indigo-500",
  },
];




const Dashboard = () => {
  return (
    <div>
        {dashboardCards.map((item, index) => (
            <div key={index} className='w-[374px] h-[146px] border border-[#2B7FFF33] bg-[#0F172B80] p-5 rounded-2xl'>
                <div>
                    <h2> {item?.title} </h2>
                    <span> {item?.value} </span>
                    <span> {item?.change} </span>
                </div>
                <div> {`<> ${item?.icon} </>`} </div>
            </div>
        ))}
    </div>
  )
}

export default Dashboard