import { X, Send } from "lucide-react";

const EmailReplyModal = ({ email, isOpen, onClose, recipientEmail, subject, to }) => {
  if (!isOpen) return null;

  console.log(email[0].fromName);
  

  return (
    <div className="fixed inset-0 bg-[#141517] ml-14 bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#141517] text-white border rounded-lg border-[#2E3236] w-[800px]  shadow-lg">
        <div className="text-md font-bold w-full flex justify-between px-3 items-center h-9 bg-[#23272C] text-[#BAB9BD]">
          Reply
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex bg-[#141517] px-8 py-1">
            <div className="text-sm text-[#BAB9BD]">To :</div>
            <div className="text-[#E7E7E7] text-sm rounded px-3">{email[0]?.toEmail}</div>
          </div>
          <div className="flex bg-[#141517] px-8  py-1">
            <div className="text-sm text-[#BAB9BD]">From :</div>
            <div className="text-[#E7E7E7] text-sm rounded px-3">
              {email[0].fromEmail}
            </div>
          </div>
          <div className="flex bg-[#141517] px-8 py-1">
            <div className="text-sm text-[#BAB9BD]">Subject :</div>
              <div className="text-[#E7E7E7] text-sm rounded px-3">{email[0]?.subject}</div>
          </div>
          <div className="px-8">
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows={10}
              className="w-full bg-[#141517] border border-[#3A3B3C] rounded px-3 py-2 text-[#636970] resize-none"
              defaultValue="Hi Jeanne,"
            />
          </div>
          <div className="flex justify-between pl-8 items-center">
            <button
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white py-2 px-6 rounded-sm flex items-center hover:opacity-90 transition duration-300"
              onClick={onClose}
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </button>
            <div className="flex space-x-2">
              {["A", "<>", "📎", "😊", "👤"].map((icon, index) => (
                <button
                  key={index}
                  className="text-gray-400 hover:bg-[#3A3B3C] p-2 rounded"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailReplyModal;
