import SideBar from "@/components/SideBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
