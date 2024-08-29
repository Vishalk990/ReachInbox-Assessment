
import { useSelector, useDispatch } from "react-redux";
import MailBox from "@/assets/MailBox";
import MessageIcon from "@/assets/MessageIcon";
import HomeIcon from "@/assets/HomeIcon";
import SearchIcon from "@/assets/SearchIcon";
import ShareIcon from "@/assets/ShareIcon";
import SettingsIcon from "@/assets/SettingsIcon";
import InboxIcon from "@/assets/InboxIcon";
import UserIcon from "@/assets/UserIcon";
import BarChart from "@/assets/BarChart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { selectActivePage, setActivePage } from "@/utils/sidebarSlice";
import { selectIsDarkMode } from "@/utils/themeSlice";
import { useNavigate } from "react-router-dom";

const SidebarLink = ({ Icon, tooltip, pageId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activePage = useSelector(selectActivePage);

  const handleClick = () => {
    dispatch(setActivePage(pageId));
    navigate(`/dashboard/${pageId}`)
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer hover:bg-gray-800 hover:rounded-lg ${activePage === pageId ? 'bg-gray-800 rounded-lg text-white' : ''}`}
            onClick={handleClick}
          >
            {Icon}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-[#101113] rounded-sm text-gray-400 flex justify-center items-center transition-all duration-200 ease-in-out"
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div className={`border-r ${isDarkMode ? 'bg-[#101113] border-[#343A40]' : 'bg-white border-gray-300'} w-14 flex flex-col items-center px-1`}>
      <div className="w-12 h-[70px] flex justify-center items-center cursor-pointer">
        <MailBox />
      </div>

      <div className="w-12 flex-grow flex flex-col justify-center items-center space-y-5 pt-2 pb-7">
        <SidebarLink Icon={<HomeIcon />} tooltip="Home" pageId="home" />
        <SidebarLink Icon={<SearchIcon />} tooltip="Search" pageId="search" />
        <SidebarLink Icon={<MessageIcon />} tooltip="Email Accounts" pageId="email" />
        <SidebarLink Icon={<ShareIcon />} tooltip="Campaigns" pageId="campaigns" />
        <SidebarLink Icon={<SettingsIcon />} tooltip="Lead List" pageId="leadList" />
        <SidebarLink Icon={<InboxIcon />} tooltip="Onebox" pageId="onebox" />
        <SidebarLink Icon={<BarChart />} tooltip="Analytics" pageId="analytics" />
      </div>
      <div className="w-12 h-[70px] flex justify-center items-center">
        <SidebarLink Icon={<UserIcon />} tooltip="Profile" pageId="profile" />
      </div>
    </div>
  );
};

export default Sidebar;