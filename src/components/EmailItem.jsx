import ShareIcon from "@/assets/ShareIcon";
import { useNavigate } from "react-router-dom";

// export const emailData = [
//   {
//     id: 1,
//     email: "Beata@gmail.com",
//     subject: "I've tried a lot and",
//     date: "Mar 7",
//     status: "Interested",
//     campaign: "Campaign Name",
//   },
//   {
//     id: 2,
//     email: "Sanya@gmail.com",
//     subject: "I've tried a lot and",
//     date: "Mar 7",
//     status: "Closed",
//     campaign: "Campaign Name",
//   },
//   {
//     id: 3,
//     email: "William@gmail.com",
//     subject: "Payment not going through",
//     date: "Mar 7",
//     status: "Interested",
//     campaign: "Campaign Name",
//     avatars: 20,
//   },
//   {
//     id: 4,
//     email: "johnson@gmail.com",
//     subject: "Could you tell me more about it",
//     date: "Mar 7",
//     status: "Meeting Booked",
//     campaign: "Campaign Name",
//   },
//   {
//     id: 5,
//     email: "orlando@gmail.com",
//     subject: "Hi, I am interested",
//     date: "18:30",
//     status: "Meeting Completed",
//     campaign: "Campaign Name",
//   },
// ];

// export const statusColors = {
//   Interested: "bg-green-500",
//   Closed: "bg-gray-500",
//   "Meeting Booked": "bg-purple-500",
//   "Meeting Completed": "bg-yellow-500",
// };

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const EmailItem = ({ fromEmail, subject, sentAt, threadId }) => {
  const navigate = useNavigate();

  const handleRedirectToThread = () => {
    navigate(`/dashboard/onebox/${threadId}`)
  };

  return (
    <div
      onClick={handleRedirectToThread}
      className="flex flex-col border-b border-[#FFFFFF] px-2 py-2 rounded-sm cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-[#FFFFFF] font-medium text-sm">{fromEmail}</span>
        <span className="text-[#FCFCFC] text-sm">{formatDate(sentAt)}</span>
      </div>
      <div className="text-[#E1E0E0] font-normal text-xs mb-2">{subject}</div>
      <div className="flex items-center justify-between">
        <div className="bg-gray-700 text-xs px-2 py-1 rounded-2xl">
          Interested
        </div>
        <div className="bg-gray-700 text-xs px-2 py-1 rounded-2xl flex items-center">
          <div className="mr-1 flex items-center justify-center gap-1">
            <div className="">
              <ShareIcon className="w-[12px] h-[12px]" />
            </div>
            <div>Campaign Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};
