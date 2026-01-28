import React from "react";
import {
  Phone,
  Bot,
  ArrowLeftRight,
  Calendar,
  XCircle,
  Clock,
} from "lucide-react";

const cards = [
  {
    title: "Total Calls Today",
    value: 127,
    change: "+12%",
    icon: Phone,
    bg: "bg-[linear-gradient(#2B7FFF,#00B8DB)]",
  },
  {
    title: "AI-Handled Calls",
    value: 98,
    change: "+77%",
    icon: Bot,
    bg: "bg-[linear-gradient(#AD46FF,#F6339A)]",
  },
  {
    title: "Warm Transfer",
    value: 23,
    change: "+18%",
    icon: ArrowLeftRight,
    bg: "bg-[linear-gradient(#FF6900,#FF6900)]",
  },
  {
    title: "Appointments Booked",
    value: 34,
    change: "+8%",
    icon: Calendar,
    bg: "bg-[linear-gradient(#00C950,#00BC7D)]",
  },
  {
    title: "Missed Calls",
    value: 6,
    change: "-3%",
    icon: XCircle,
    bg: "bg-[linear-gradient(#FB2C36,#FF2056)]",
  },
  {
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    icon: Clock,
    bg: "bg-[linear-gradient(#615FFF,#2B7FFF)]",
  },
];

function Dashboard() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isPositive = card.change.startsWith("+");

        return (
          <div
            key={index}
            className="border border-[#2B7FFF33] bg-[#0F172B] p-5 rounded-2xl flex justify-between items-start"
          >


            <div className="space-y-2">
              <div className="text-[#90A1B9] text-sm leading-5 font-normal">{card.title}</div>
              <div className="text-white text-3xl font-medium">{card.value}</div>
              <div
                className={
                  isPositive ? "text-green-400 text-sm" : "text-red-400 text-sm"
                }
              >
                {card.change}
              </div>
            </div>

            {/* Icon part */}
            <div
              className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center ${card.bg}`}
            >
              <Icon className="w-[20px] h-[20px]" color="white" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
