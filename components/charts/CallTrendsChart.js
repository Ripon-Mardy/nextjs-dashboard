// CallTrendsChart.jsx
'use client'
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";


const sampleData = [
  { day: "Mon", calls: 50 },
  { day: "Tue", calls: 55 },
  { day: "Wed", calls: 45 },
  { day: "Thu", calls: 65 },
  { day: "Fri", calls: 85 },
  { day: "Sat", calls: 95 },
  { day: "Sun", calls: 77 },
];

// Compute total dynamically (you can do this from API data)
const totalCalls = sampleData.reduce((sum, item) => sum + item.calls, 0);

// Optional: Example top percentage changes (you can pass these as props or fetch them)
const changes = [
  { value: "+6%", color: "text-green-400" },
  { value: "-3%", color: "text-red-400" },
  { value: "+15%", color: "text-green-400" },
];

function CallTrendsChart({
  data = sampleData, // Pass your real weekly data here
  period = "This Week",
  title = "Call Trends - This Week",
  borderColor = "border-[#A855F7]", // Purple border to match screenshot (violet/fuchsia tone)
  gradientStart = "#2B7FFF",
  gradientEnd = "#00B8DB",
}) {


  // You can make these dynamic via props too
  const chartData = data; // Already in correct format

  return (
    <div
      className={`border ${borderColor} bg-[#0F172B] p-6 rounded-2xl shadow-lg flex flex-col gap-6 my-5`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-400 mt-1">
            Total {totalCalls.toLocaleString()} calls
          </p>
        </div>

        {/* Period selector (fake dropdown for now – you can make it real with <select>) */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] rounded-lg border border-gray-700 text-gray-300 text-sm cursor-pointer hover:bg-[#334155] transition">
          {period} <ChevronDown size={16} />
        </div>
      </div>

      {/* Top Percentage Changes (matches the +6% / -3% / +15% pills) */}
      <div className="flex flex-wrap gap-4">
        {changes.map((change, index) => (
          <div
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${change.color} bg-opacity-20 bg-gray-800 border border-gray-700`}
          >
            {change.value}
          </div>
        ))}
      </div>

      {/* The Chart Itself */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* Define the gradient for the area fill */}
            <defs>
              <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={gradientStart} stopOpacity={0.9} />
                <stop offset="95%" stopColor={gradientEnd} stopOpacity={0.3} />
              </linearGradient>
            </defs>

            {/* Grid lines – subtle dark theme */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />

            {/* X Axis – days of week */}
            <XAxis
              dataKey="day"
              stroke="#94A3B8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />

            {/* Y Axis – hidden labels but visible ticks/grid */}
            <YAxis
              stroke="#94A3B8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, "dataMax + 20"]} // Auto-scale with some padding
              tickFormatter={(value) => `${value}`}
            />

            {/* Tooltip on hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#F1F5F9",
              }}
              labelStyle={{ color: "#94A3B8" }}
              itemStyle={{ color: "#F1F5F9" }}
            />

            {/* The Area + Line */}
            <Area
              type="monotone" // Smooth curve like in your screenshot
              dataKey="calls"
              stroke={gradientStart} // Line color
              strokeWidth={2}
              fill="url(#callGradient)"
              fillOpacity={1}
              dot={false} // No visible dots for clean look
              activeDot={{ r: 6, fill: "#FFFFFF", stroke: gradientStart }}
            />

            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CallTrendsChart;