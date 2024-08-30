import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MessageSquare, Reply } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DOMPurify from "dompurify";
import { format, parseISO } from "date-fns";
import { Button } from "./ui/button";
import SettingsIcon from "@/assets/SettingsIcon";
import EmailReplyModal from "./ReplyModal";

const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "dd MMM yyyy : h:mm a");
};

const EmailDetails = ({ email, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // console.log(email);
    
    const handleKeydown = (event) => {
      if (event.ctrlKey && event.key === "r") {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [email]);

  const bgColor = isDarkMode ? "bg-[#101113]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const secondaryBgColor = isDarkMode ? "bg-[#141517]" : "bg-gray-100";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`${bgColor} ${textColor} px-2 mx-auto h-[90vh] overflow-hidden`}>
      <div className={`flex justify-between h-16 ${bgColor} items-center mb-2`}>
        <div className="flex justify-center flex-col px-2 py-1">
          <div className="font-semibold text-sm">Orlando</div>
          <div className={`${isDarkMode ? "text-[#FFFFFF] opacity-40" : "text-gray-500"} font-normal text-xs`}>
            orlando.@gmail.com
          </div>
        </div>
        <div className="flex justify-center items-center w-[370px] gap-4">
          <Select className="text-center">
            <SelectTrigger className={`w-[200px] ${isDarkMode ? "bg-[#1F1F1F] text-[#D3D7DB]" : "bg-gray-200 text-gray-800"} text-sm border-0`}>
              <SelectValue placeholder="Meeting Completed" />
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className={`w-[150px] ${isDarkMode ? "bg-[#1F1F1F] text-[#D3D7DB]" : "bg-gray-200 text-gray-800"} text-sm border-0`}>
              <SelectValue placeholder="Move" />
            </SelectTrigger>
            <SelectContent className={isDarkMode ? "bg-[#1E1F22] text-[#D3D7DB]" : "bg-white text-gray-800"}>
              <SelectItem value="inbox">Mark as unread</SelectItem>
              <SelectItem value="inbox">Edit lead</SelectItem>
              <SelectItem value="archive">Remove lead</SelectItem>
              <SelectItem value="spam">Set reminder</SelectItem>
              <SelectItem value="trash">Delete</SelectItem>
            </SelectContent>
          </Select>
          <button className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-2 rounded-md`}>
            <SettingsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="email-details-container h-[calc(80vh-60px)] overflow-y-auto scrollbar-hide">
        {email?.map((emailItem) => (
          <React.Fragment key={emailItem.id}>
            <div className={`${isDarkMode ? "bg-[#171819]" : "bg-gray-200"} h-[2px] w-full my-1`}></div>
            <div className={`${bgColor} ${textColor} p-4 mx-auto`}>
              <div className={`${secondaryBgColor} rounded-sm p-6 mb-4 border ${borderColor}`}>
                <div className="flex justify-between items-center">
                  <h2 className={`text-lg ${isDarkMode ? "text-[#F8FAFC]" : "text-gray-800"} font-bold mb-3`}>
                    {emailItem.subject}
                  </h2>
                  <div className="text-center text-gray-500 text-sm mb-4">
                    {formatDate(emailItem.sentAt)}
                  </div>
                </div>

                <span className={`${isDarkMode ? "text-[#AEAEAE]" : "text-gray-600"} text-sm mb-2 px-1`}>
                  from: {emailItem.fromName}
                </span>
                <span className={`${mutedTextColor} text-sm mb-2 px-1`}>
                  CC: {emailItem.cc.join(", ")}
                </span>
                <p className={`${mutedTextColor} text-sm mb-4 px-1`}>
                  To: {emailItem.toEmail}
                </p>
                <div
                  className={`mb-4 px-1 ${isDarkMode ? "text-[#E1E0E0]" : "text-gray-700"} text-sm`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(emailItem.body),
                  }}
                />
                <button className={`mt-6 ${mutedTextColor} text-sm flex items-center mx-auto`}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View all {emailItem.replies} replies
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
        <Button
          className="absolute bottom-4 left-[360px] text-white rounded-sm py-2 px-6 flex items-center transition duration-300 bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
          onClick={handleModal}
        >
          <Reply className="w-5 h-5 mr-3 transform" />
          Reply 
        </Button>
        <EmailReplyModal
          isOpen={isOpen}
          onClose={closeModal}
          email={email}
        />
      </div>
    </div>
  );
};

export default EmailDetails;