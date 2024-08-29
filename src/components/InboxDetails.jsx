import RefreshIcon from "@/assets/RefreshIcon";
import { ChevronDown, Search } from "lucide-react";
import { emailData, EmailItem } from "./EmailItem";
import { Input } from "./ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const InboxDetails = () => {
  const [allEmails, setAllEmails] = useState([]);
  const token = useSelector((state) => state.user.token);

  const handleRefresh = () => {

  };

  useEffect(() => {
    const fetchAllMails = async () => {
      try {
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllEmails(response?.data?.data);
        // setAllEmails(() => (response?.data.data));
        // console.log(response?.data?.data);
        // console.log(allEmails);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchAllMails();
  }, [token]);

  return (
    <div className="bg-[#000000] text-white h-full flex flex-col">
      <div className="px-3 pt-2 mb-2">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-2 text-xl text-[#4285F4]">
            All Inbox(s)
          </span>
          <ChevronDown className="w-4 h-4 text-[#4285F4]" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold">
            25/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </span>
          <div className="w-8 h-8 bg-[#25262B] rounded-sm cursor-pointer flex justify-center items-center">
            <RefreshIcon onClick={handleRefresh} />
          </div>
        </div>
      </div>

      <div className="relative px-3 mb-4">
        <Input
          type="text"
          placeholder="Search"
          className="w-full text-[#23272C] bg-[#23272C] rounded-sm border border-[#FFFFFF] py-2 pl-8 pr-4 text-sm"
        />
        <Search className="w-4 h-4 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      {/* 
      <div className="text-[#33383F] border h-[2px] w-[255px] text-center">
      </div> */}

      <div className="flex justify-between items-center px-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#222426] flex justify-center items-center w-8 h-6 rounded-2xl">
            <span className="font-bold text-blue-400">26</span>
          </div>
          <span>New Replies</span>
        </div>
        <div className="flex items-center px-2 py-1 rounded-lg gap-2 cursor-pointer hover:bg-slate-800 hover:transition-all hover:duration-300 hover:ease-in-out">
          <span className="">Newest</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="h-[60vh] overflow-y-auto px-2 custom-scrollbar">
          {allEmails.length > 0 &&
            allEmails.map((email) => <EmailItem key={email.id} {...email} />)}
        </div>
      </div>
    </div>
  );
};

export default InboxDetails;
