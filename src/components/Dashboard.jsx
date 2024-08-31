import Sidebar from "./Sidebar";
import { Switch } from "./ui/switch";
import { Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleTheme } from "@/utils/themeSlice";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-screen flex ${
        isDarkMode ? "bg-[#000000] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <div className="flex-grow">
        <nav
          className={`border-t border-r border-b ${
            isDarkMode
              ? "border-[#343A40] bg-[#1F1F1F]"
              : "border-gray-200 bg-gray-100"
          } h-16 flex items-center justify-between p-6`}
        >
          <div
            className={`font-bold font-sans leading-6 text-base tracking-wider ${
              isDarkMode ? "text-[#FFFFFF]" : "text-black"
            } w-32 text-center py-1`}
          >
            Onebox
          </div>
          <div className="flex gap-6 items-center">
            <div className="relative">
              <Switch
                checked={isDarkMode}
                onCheckedChange={() => dispatch(toggleTheme())}
                className={`w-[3.25rem] h-7 ${
                  isDarkMode ? "bg-gray-600" : "bg-blue-400"
                }`}
              />
              {!isDarkMode && (
                <Moon className="h-5 w-5 text-gray-400 absolute top-1 right-1 pointer-events-none" />
              )}
            </div>
            <div>Tim&apos;s Workspace</div>
          </div>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
