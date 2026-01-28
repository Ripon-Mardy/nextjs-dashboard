import React from 'react';


const topRepairRequests = [
  {
    name: "Screen Repair",
    count: 156,
    isTop: true,
  },
  {
    name: "Battery Replacement",
    count: 89,
    isTop: false,
  },
  {
    name: "Back Glass Repair",
    count: 67,
    isTop: false,
  },
  {
    name: "Software Issues",
    count: 45,
    isTop: false,
  },
];


const maxCount = Math.max(...topRepairRequests.map(item => item.count));
console.log('maxcount', maxCount)

const RepairRequest = () => {
  return (
    <div className="bg-[#0F172B80] rounded-2xl border border-[#2B7FFF33] p-6 w-full">

      <h3 className="text-xl font-medium text-white mb-5">
        Top Repair Requests
      </h3>

      
      <div className="space-y-5">
        {topRepairRequests.map((item, index) => {
          const widthPercentage = (item.count / maxCount) * item.count;

          return (
            <div key={index} className="flex flex-col gap-1.5">

              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium`}
                >
                  {item?.name}
                </span>
                <span className="text-sm font-normal text-gray-400">
                  {item?.count} requests
                </span>
              </div>


              {/* bar  */}
              <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full bg-[#2B7FFF] transition-all duration-500`}
                  style={{ width: `${widthPercentage}%` }}
                />
              </div>


            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepairRequest;



 