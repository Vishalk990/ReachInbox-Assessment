import MailBox from "@/assets/MailBox";
import MessageIcon from "@/assets/MessageIcon";
import HomeIcon from "@/assets/HomeIcon";
import SearchIcon from "@/assets/SearchIcon";
import ShareIcon from "@/assets/ShareIcon";
import SettingsIcon from "@/assets/SettingsIcon";
import InboxIcon from "@/assets/InboxIcon";
import UserIcon from "@/assets/UserIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BarChart from "@/assets/BarChart";

const SidebarLink = ({ Icon, tooltip }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer hover:bg-gray-800 hover:rounded-lg">
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

const Sidebar = () => {
  return (
    <div className="border-r border-[#343A40]  bg-[#101113] w-14 flex flex-col items-center px-1">
      <div className="w-12 h-[70px] flex justify-center items-center cursor-pointer">
        <MailBox />
      </div>

      <div className="w-12 flex-grow flex flex-col justify-center items-center space-y-5 pt-2 pb-7">
        <SidebarLink Icon={<HomeIcon />} tooltip="Home" />
        <SidebarLink Icon={<SearchIcon />} tooltip="Search" />
        <SidebarLink Icon={<MessageIcon />} tooltip="Email Accounts" />
        <SidebarLink Icon={<ShareIcon />} tooltip="Campaigns" />
        <SidebarLink Icon={<SettingsIcon />} tooltip="Lead List" />
        <SidebarLink Icon={<InboxIcon />} tooltip="Onebox" />
        <SidebarLink Icon={<BarChart />} tooltip="Analytics" />
      </div>
      <div className="w-12 h-[70px] flex justify-center items-center">
        <SidebarLink Icon={<UserIcon />} tooltip="Profile" />
      </div>
    </div>
  );
};

export default Sidebar;
