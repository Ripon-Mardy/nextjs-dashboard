"use client";
import React, { useState } from "react";
import Image from "next/image";

import { SquarePen } from "lucide-react";

import avater from "@/public/avater.png";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const [formData, setFormData] = useState (
    {
      name: "Jane D.",
      email: "jane@gmail.com",
      storeName: "Ubreakfix Store",
      storeAddress: "123 Main Street, New York",
    },

  );

  const handleProfileUpdateChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
        ...prev,
        [name] : value
    }))

  };

  return (
    <div className="p-5">
      {isEditing ? (
        <div>
          {/* profile password  */}
          <div className="flex items-center justify-start gap-[63px]">
            <button className="font-normal text-[24px] leading-9">
              Profile
            </button>
            <button className="font-normal text-[24px] leading-9">
              Password Settings
            </button>
          </div>

          {/* profile picture  */}
          <div className="mt-[40px]">
            <h2 className="font-medium text-[20px] text-white">
              Profile Image
            </h2>
            <div className="flex items-end justify-start mt-2">
              <div className="w-[102px] h-[102px]">
                <Image src={avater} alt="avater" />
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-[linear-gradient(#152252,#111B3C)] py-1 px-2 rounded-[12px] menu-shadow"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* information  */}
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex  items-center justify-start gap-20 border-b border-[#192D71] pb-4">
              <h2 className="font-medium text-[20px] w-[142px]">
                Full Name :
              </h2>
              <p className="font-medium text-[20px]">Jane D.</p>
            </div>

            <div className="flex  items-center justify-start gap-20 border-b border-[#192D71] pb-4">
              <h2 className="font-medium text-[20px] w-[142px]">Email:</h2>
              <p className="font-medium text-[20px] ">jane@gmail.com</p>
            </div>

            <div className="flex  items-center justify-start gap-20 border-b border-[#192D71] pb-4">
              <h2 className="font-medium text-[20px] w-[142px]">Store Name:</h2>
              <p className="font-medium text-[20px] ">Ubreakfix Store</p>
            </div>

            <div className="flex  items-center justify-start gap-20 border-b border-[#192D71] pb-4">
              <h2 className="font-medium text-[20px] w-[142px]">
                Store Address:
              </h2>
              <p className="font-medium text-[20px] ">
                123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* profile password  */}
          <div className="flex items-center gap-[63px] border-b border-[#192D71]">
            {/* Profile Tab */}
            <button
              onClick={() => setActiveTab("profile")}
              className={`font-normal text-[24px] leading-9 pb-2 
          ${
            activeTab === "profile"
              ? "border-b-2 border-[#87A2FF] text-white"
              : "border-b-2 border-transparent text-slate-400"
          }`}
            >
              Profile
            </button>

            <button
              onClick={() => setActiveTab("password")}
              className={`font-normal text-[24px] leading-9 pb-2 ${
                activeTab === "password"
                  ? "border-b-2 border-[#87A2FF] text-white"
                  : "border-b-2 border-transparent text-slate-400"
              }`}
            >
              Password Settings
            </button>
          </div>

          {activeTab === 'profile' && (
            <div>
                {/* profile picture  */}
          <div className="mt-[40px]">
            <h2 className="font-medium text-[20px] text-white">
              Profile Image
            </h2>

            <div className="flex items-end justify-start mt-2">
              <div className="w-[102px] h-[102px] relative">
                <Image src={avater} alt="avater" />
                <div className="absolute right-0 bottom-0 bg-[#7AA3CC] w-[40px] h-[40px] flex items-center justify-center rounded-[8px]">
                  <SquarePen className="w-[26px] h-[26px] text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* update information box  */}
          <div className="mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-medium">Full Name</label>
              <input
              name="name"
                onChange={handleProfileUpdateChange}
                value={formData?.email}
                className="bg-[#0A0A0F80] w-[484px] h-[48px] border border-[#00FF8833] rounded-[14px] py-3 px-4 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-medium">Email</label>
              <input
              name="email"
                onChange={handleProfileUpdateChange}
                value={formData?.email}
                className="bg-[#0A0A0F80] w-[484px] h-[48px] border border-[#00FF8833] rounded-[14px] py-3 px-4 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-medium">Store Name</label>
              <input
              name="storeName"
                onChange={handleProfileUpdateChange}
                value={formData?.storeName}
                className="bg-[#0A0A0F80] w-[484px] h-[48px] border border-[#00FF8833] rounded-[14px] py-3 px-4 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xl font-medium">Store Address</label>
              <input
              name="storeAddress"
                onChange={handleProfileUpdateChange}
                value={formData?.storeAddress}
                className="bg-[#0A0A0F80] w-[484px] h-[48px] border border-[#00FF8833] rounded-[14px] py-3 px-4 outline-none"
              />
            </div>
          </div>

          {/* save button  */}

          <div onClick={() => setIsEditing(!isEditing)} className="mt-[80px] cursor-pointer w-[373px] h-[52px] rounded-2xl p-2 mx-auto text-center bg-[#00C950] flex items-center justify-center">
            <button  className="font-bold text-[22px] cursor-pointer" >Save</button>
          </div>

          


            </div>
          )}

          {activeTab === 'password' && (
            <div className="text-[20px] font-medium mt-4">Password Settings</div>
          )}


        </div>
      )}
    </div>
  );
};

export default page;
