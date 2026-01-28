import React from 'react';
import {
  Phone,
  Bot,
  ArrowLeftRight,
  Calendar,
  XCircle,
  Clock,
} from 'lucide-react';

const cards = [
  { title: "Total Calls Today", value: 127, change: "+12%", icon: Phone, bg: "bg-sky-500" },
  { title: "AI-Handled Calls", value: 98, change: "+77%", icon: Bot, bg: "bg-fuchsia-500" },
  { title: "Warm Transfer", value: 23, change: "+18%", icon: ArrowLeftRight, bg: "bg-orange-500" },
  { title: "Appointments Booked", value: 34, change: "+8%", icon: Calendar, bg: "bg-emerald-500" },
  { title: "Missed Calls", value: 6, change: "-3%", icon: XCircle, bg: "bg-red-500" },
  { title: "Avg Call Duration", value: "3:42", change: "+15%", icon: Clock, bg: "bg-indigo-500" },
];

function Dashboard() {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const isPositive = card.change.startsWith('+');

        return (
          <div
            key={i}
            className="border border-[#2B7FFF33] bg-[#0F172B] p-5 rounded-2xl flex justify-between items-center"
          >
            {/* Text part */}
            <div>
              <div className="text-gray-400 text-sm">{card.title}</div>
              <div className="text-white text-3xl font-bold">{card.value}</div>
              <div className={isPositive ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
                {card.change}
              </div>
            </div>

            {/* Icon part */}
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.bg}`}>
              <Icon size={28} color="white" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;