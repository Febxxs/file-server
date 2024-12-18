import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
const DashboardLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <div className="flex bg-slate-200">
      <Sidebar sidebarOpen={isOpenSidebar} setSidebarOpen={setIsOpenSidebar} />
      <main className="flex-1 mx-auto ">
        <Header toggleSidebar={setIsOpenSidebar} isOpen={isOpenSidebar} />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
