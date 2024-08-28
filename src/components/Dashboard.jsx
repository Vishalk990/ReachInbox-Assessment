import React from "react";
import Sidebar from "./Sidebar";
import { Switch } from "./ui/switch";
import { Sun } from "lucide-react";
import DashboardIcon from "@/assets/DashboardIcon";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className="w-full h-screen bg-[#000000] text-white flex">
      <Sidebar />
      <div className="flex-grow">
        <nav className="border-t border-r border-b border-[#343A40] h-16 flex items-center justify-between bg-[#1F1F1F] p-6">
          <div className="font-bold text-base tracking-wider text-[#FFFFFF] w-32 text-center py-1">
            Onebox
          </div>
          <div className="flex gap-6 items-center">
            <div className="relative">
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="w-[3.25rem] h-7 bg-gray-400 data-[state=checked]:bg-black"
              />
              {!isDarkMode && (
                <Sun className="h-5 w-5 text-yellow-400 absolute top-1 right-1 pointer-events-none" />
              )}
            </div>
            <div>Tim&apos;s Workspace</div>
          </div>
        </nav>
        <div className="bg-[#000000] flex justify-center items-center h-[90vh] border border-white">
          <DashboardIcon />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
