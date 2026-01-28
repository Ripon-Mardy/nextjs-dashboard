"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/public/logo/Vector.png";

import { House, Phone, Calendar, LogOut, Settings   } from "lucide-react";

const Sidebar = () => {
const menus = [
  { name: "Dashboard", icon: House, path: "/" },
  { name: "Call Logs", icon: Phone, path: "/call-logs" },
  { name: "Appointments", icon: Calendar, path: "/appointments" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

  const pathname = usePathname();
  
  return (
    <div className="bg-sidebar flex flex-col border-r border-[#2B7FFF33] items-start h-full px-2">
      {/* logo  */} 
      <div className="logo-background mx-auto w-[56px] h-[56px] mt-[38px] flex justify-center items-center rounded-xl">
        <Image src={logo} className="w-6 h-6" alt="logo" />
      </div>


      {/* menu  */}   
      <div className="space-y-7 mt-[66px]">
        {menus.map((item, index) => (
          <div key={index} className="flex gap-32">
            <Link
              href={item.path} 
              className={`flex items-center gap-7 px-2 py-1 space-y-5 font-medium text-sm rounded-2xl   w-[225px] h-[40px] ${pathname === item.path ? 'menu-shadow border border-white/50' : ''} `}
            >
              {<item.icon className="w-[26px] h-[26px]" />} {item.name}
            </Link> 
          </div>
        ))}
      </div>


      {/* log out  */}
      <div className="absolute left-4 bottom-3">
        <button className="flex items-center gap-2 text-sm"> <LogOut className="w-[26px] h-[26px] text-[#000000]" /> <span className="text-[#FF1100]">Logout</span></button>
      </div>

    </div>
  );
};

export default Sidebar;
