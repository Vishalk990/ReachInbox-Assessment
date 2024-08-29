import { useEffect } from "react";
import { MoveRight, MessageSquare } from "lucide-react";
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

const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "dd MMM yyyy : h:mm a");
};

const EmailDetails = ({ email , id}) => {
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div className="bg-[#101113] text-white px-2 mx-auto">
      {email?.map((emailItem) => (
        <div key={emailItem.id} className="bg-[#101113] text-white p-4 mx-auto">
          <div className="flex justify-between h-16 bg-[#101113] items-center mb-4">
            <div className="flex justify-center flex-col px-2 py-1">
              <div className="font-semibold text-sm">{emailItem.fromName}</div>
              <div className="text-[#FFFFFF] opacity-40 font-normal text-xs">
                {emailItem.fromEmail}
              </div>
            </div>
            <div className="flex justify-center items-center h-[33px] w-2/3 gap-4">
              <Select className="text-center">
                <SelectTrigger className="w-[200px] bg-[#1F1F1F] text-[#D3D7DB] text-sm">
                  <SelectValue placeholder="Meeting Completed" className="" />
                </SelectTrigger>
              </Select>
              <Select>
                <SelectTrigger className="w-[150px] bg-[#1F1F1F] text-[#D3D7DB] text-sm">
                  <SelectValue placeholder="Move" />
                </SelectTrigger>
                <SelectContent className="bg-[#1E1F22] text-[#D3D7DB]">
                  <SelectItem value="inbox">Mark as unread</SelectItem>
                  <SelectItem value="inbox">Edit lead</SelectItem>
                  <SelectItem value="archive">Remove lead</SelectItem>
                  <SelectItem value="spam">Set reminder</SelectItem>
                  <SelectItem value="trash">Delete</SelectItem>
                </SelectContent>
              </Select>
              <button className="bg-gray-800 p-2 rounded-md">
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-[#141517] rounded-sm p-6 mb-4 border">
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-[#F8FAFC] font-bold mb-3">
                {emailItem.subject}
              </h2>
              <div className="text-center text-gray-500 text-sm mb-4">
                {formatDate(emailItem.sentAt)}
              </div>
            </div>

            <span className="text-[#AEAEAE] text-sm mb-2 px-1">
              from: {emailItem.fromName}
            </span>
            <span className="text-gray-400 text-sm mb-2 px-1">
              CC: {emailItem.cc.join(", ")}
            </span>
            <p className="text-gray-400 text-sm mb-4 px-1">
              To: {emailItem.toEmail}
            </p>
            <div
              className="mb-4 px-1 text-[#E1E0E0] text-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(emailItem.body),
              }}
            />
            <button className="mt-6 text-gray-400 text-sm flex items-center mx-auto">
              <MessageSquare className="w-4 h-4 mr-2" />
              View all {emailItem.replies} replies
            </button>
          </div>

          <Button className="bg-blue-600 text-white rounded-sm py-2 pr-10 pl-6 flex items-center hover:bg-blue-700 transition duration-300">
            <MoveRight className="w-5 h-5 mr-3 transform rotate-180" />
            Reply
          </Button>
        </div>
      ))}
    </div>
  );
};

export default EmailDetails;
