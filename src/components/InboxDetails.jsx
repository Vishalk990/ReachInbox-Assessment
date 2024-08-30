import RefreshIcon from "@/assets/RefreshIcon";
import { ChevronDown, Search } from "lucide-react";
import { EmailItem } from "./EmailItem";
import { Input } from "./ui/input";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails, setError, setLoading } from "@/utils/emailSlice";

const InboxDetails = () => {
  const dispatch = useDispatch();

  const { allEmails } = useSelector((state) => state.emails);
  const token = useSelector((state) => state.user.token);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleRefresh = () => {};

  useEffect(() => {
    const fetchAllMails = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setEmails(response?.data?.data));
      } catch (error) {
        console.log("Error: ", error);
        dispatch(setError(error.message));
      }
    };

    fetchAllMails();
  }, [dispatch, token]);

  return (
    <div className={`${isDarkMode ? "bg-[#000000] text-white" : "bg-white text-black"} h-full flex flex-col`}>
      <div className="px-3 pt-2 mb-2">
        <div className="flex items-center mb-2">
          <span className={`font-bold mr-2 text-xl ${isDarkMode ? "text-[#4285F4]" : "text-blue-600"}`}>
            All Inbox(s)
          </span>
          <ChevronDown className={`w-4 h-4 ${isDarkMode ? "text-[#4285F4]" : "text-blue-600"}`} />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold">
            25/25{" "}
            <span className={`font-normal ${isDarkMode ? "text-[#7F7F7F]" : "text-gray-500"}`}>
              Inboxes selected
            </span>
          </span>
          <div
            className={`w-8 h-8 ${isDarkMode ? "bg-[#25262B]" : "bg-gray-200"} rounded-sm cursor-pointer flex justify-center items-center`}
          >
            <RefreshIcon className="w-4 h-4" onClick={handleRefresh} />
          </div>
        </div>
      </div>

      <div className="relative px-3 mb-4">
        <Input
          type="text"
          placeholder="Search"
          className={`w-full ${isDarkMode ? "text-[#23272C] bg-[#23272C]" : "text-black bg-gray-200"} rounded-sm border border-gray-300 py-2 pl-8 pr-4 text-sm`}
        />
        <Search className={`w-4 h-4 absolute left-5 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} />
      </div>

      <div className="flex justify-between items-center px-3 mb-4">
        <div className="flex items-center gap-2">
          <div className={`${isDarkMode ? "bg-[#222426]" : "bg-gray-200"} flex justify-center items-center w-8 h-6 rounded-2xl`}>
            <span className={`font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              {allEmails.length}
            </span>
          </div>
          <span>New Replies</span>
        </div>
        <div
          className={`flex items-center px-2 py-1 rounded-lg gap-2 cursor-pointer ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-300"} hover:transition-all hover:duration-300 hover:ease-in-out`}
        >
          <span>Newest</span>
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
