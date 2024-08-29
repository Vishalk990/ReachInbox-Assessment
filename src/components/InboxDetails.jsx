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
            <RefreshIcon className="w-4 h-4" onClick={handleRefresh} />
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

      <div className="flex justify-between items-center px-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#222426] flex justify-center items-center w-8 h-6 rounded-2xl">
            <span className="font-bold text-blue-400">{allEmails.length}</span>
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
