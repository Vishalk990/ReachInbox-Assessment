import DashboardIcon from "@/assets/DashboardIcon";
import { selectIsDarkMode } from "@/utils/themeSlice";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#000000]" : "bg-gray-100"
      } flex justify-center items-center h-[90vh]`}
    >
      <div className="w-[832px] h-[392px] flex flex-col items-center justify-between">
        <DashboardIcon />
        <div className="w-[553px] h-[115px] flex flex-col items-center justify-between">
          <div
            className={`font-bold text-2xl text-center ${
              isDarkMode ? "text-[#FFFFFF]" : "text-gray-800"
            }`}
          >
            It’s the beginning of a legendary sales pipeline
          </div>
          <div
            className={`w-[289px] h-[54px] ${
              isDarkMode ? "text-[#9E9E9E]" : "text-gray-600"
            } text-center font-medium text-lg`}
          >
            When you have inbound E-mails you’ll see them here
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
