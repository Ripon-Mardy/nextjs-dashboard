"use client";
import React, { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const ClientLayout = ({ children }) => {
  const [isOpenSidebar, SetIsOpenSidebar] = useState(false);

  const openSideBarfunction = () => {
    SetIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <main className="max-w-[1440px] mx-auto flex">

        <div className="w-[241px] hidden md:block ml-auto border-r border-[#111B3C] min-h-screen fixed h-screen">
        <Sidebar isOpen={openSideBarfunction}  />
      </div>

      {isOpenSidebar && (
         <div className="w-[241px] ml-auto border-r border-[#111B3C] min-h-screen fixed h-screen">
        <Sidebar isOpen={openSideBarfunction}  />
      </div>
      )}


      <div className="flex-1 md:ml-[241px]">
        <Header isOpen={openSideBarfunction} />
        {children}
      </div>    
    </main>
  );
};

export default ClientLayout;
