
import { ChevronDown, MoveRight, MessageSquare } from 'lucide-react';

const EmailDetails = () => {
  const emailData = {
    sender: 'Orlando',
    email: 'orlodom@gmail.com',
    status: 'Meeting Completed',
    subject: 'New Product Launch',
    date: '20 June 2022 : 9:16AM',
    from: 'jeanne@icloud.com',
    cc: 'lennon.j@mail.com',
    to: 'lennon.j@mail.com',
    content: `Hi {FIRST_NAME},

I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your products.`,
    replies: 4,
  };

  const Avatar = ({ letter, color }) => (
    <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white font-bold`}>
      {letter}
    </div>
  );

  return (
    <div className="bg-gray-900 text-white p-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold">{emailData.sender}</span>
          <span className="text-gray-400 text-sm">{emailData.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 text-black text-sm px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">●</span>
            {emailData.status}
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <button className="bg-gray-800 text-sm px-3 py-1 rounded-md flex items-center">
            Move
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button className="bg-gray-800 p-1 rounded-md">
            <MoveRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Date */}
      <div className="text-center text-gray-500 text-sm mb-4">Today</div>

      {/* Email Content */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">{emailData.subject}</h2>
        <p className="text-gray-400 text-sm mb-2">
          from : {emailData.from} cc : {emailData.cc}
        </p>
        <p className="text-gray-400 text-sm mb-4">to : {emailData.to}</p>
        <p className="mb-4 whitespace-pre-line">{emailData.content}</p>
        <div className="flex justify-center space-x-1">
          <Avatar letter="N" color="bg-blue-500" />
          <Avatar letter="g" color="bg-purple-500" />
          <Avatar letter="N" color="bg-blue-500" />
        </div>
        <button className="mt-4 text-gray-400 text-sm flex items-center mx-auto">
          <MessageSquare className="w-4 h-4 mr-1" />
          View all {emailData.replies} replies
        </button>
      </div>

      {/* Footer Avatars */}
      <div className="flex justify-end mb-4 space-x-1">
        <Avatar letter="P" color="bg-green-500" />
        <Avatar letter="P" color="bg-blue-500" />
      </div>

      {/* Reply Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
        <MoveRight className="w-5 h-5 mr-2 transform rotate-180" />
        Reply
      </button>
    </div>
  );
};

export default EmailDetails;