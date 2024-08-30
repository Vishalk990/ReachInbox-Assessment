import ShareIcon from "@/assets/ShareIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const EmailItem = ({ fromEmail, subject, sentAt, threadId }) => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleRedirectToThread = () => {
    navigate(`/dashboard/onebox/${threadId}`);
  };

  return (
    <div
      onClick={handleRedirectToThread}
      className={`flex flex-col border-b ${isDarkMode ? "border-[#33383F] bg-[#1F1F1F]" : "border-gray-300 bg-white"} px-2 py-2 mb-1 rounded-sm cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`${isDarkMode ? "text-[#FFFFFF]" : "text-black"} font-medium text-sm`}>{fromEmail}</span>
        <span className={`${isDarkMode ? "text-[#FCFCFC]" : "text-gray-600"} text-sm`}>{formatDate(sentAt)}</span>
      </div>
      <div className={`${isDarkMode ? "text-[#E1E0E0]" : "text-gray-800"} font-normal text-xs mb-2`}>{subject}</div>
      <div className="flex items-center justify-between py-1">
        <div className={`${isDarkMode ? "bg-[#1F2937] text-[#57E0A6]" : "bg-green-100 text-green-600"} text-xs px-2 py-1 rounded-2xl flex items-center`}>
          <div className={`${isDarkMode ? "bg-[#57E0A6]" : "bg-green-600"} w-2 h-2 rounded-full mr-2`}></div>
          Interested
        </div>
        <div className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} text-xs px-2 py-1 rounded-2xl flex items-center`}>
          <div className="mr-1 flex items-center justify-center gap-1">
            <div className="">
              <ShareIcon className={`w-[12px] h-[12px] ${isDarkMode ? "text-white" : "text-black"}`} />
            </div>
            <div>Campaign Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};
