import React from 'react';

const recentActivities = [
  {
    id: 1,
    text: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    dotColor: "bg-[#22c55e]", 
  },
  {
    id: 2,
    text: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    dotColor: "bg-[#3b82f6]",
  },
  {
    id: 3,
    text: "Quote provided for iPad battery replacement",
    time: "8 min ago",
    dotColor: "bg-[#22c55e]",
  },
  {
    id: 4,
    text: "Call dropped after 12 seconds",
    time: "15 min ago",
    dotColor: "bg-[#ef4444]",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-box rounded-2xl border border-[#2B7FFF33] pt-6 pb-3 px-6 flex flex-col overflow-hidden">

      <h2 className="text-xl font-medium text-white mb-5">
        Recent Activity
      </h2> 


      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-2 rounded-lg p-2 bg-[#1D293D80]">

            <div className="mt-2">
              <div
                className={`w-2 h-2 rounded-full ${activity.dotColor}`}
              />
            </div>

            {/* Content */}
            <div className="space-y-1">
              <p className="text-gray-100 text-sm leading-relaxed">
                {activity.text}
              </p>
              <p className="text-[#7A8BA4] text-xs mt-0.5">
                {activity.time}
              </p>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}