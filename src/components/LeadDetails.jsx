import React from 'react';
import { useSelector } from 'react-redux';
import { Mail, Send } from "lucide-react";

const leadData = {
  name: "Orlando",
  contactNo: "+54-9062827869",
  emailId: "orlando@gmail.com",
  linkedin: "linkedin.com/in/timvadde/",
  companyName: "Reachinbox",
  campaign: {
    name: "Campaign Name",
    steps: 3,
    daysInSequence: 5,
    activities: [
      { step: 1, type: "Email", status: "Sent", date: "3rd, Feb" },
      { step: 2, type: "Email", status: "Opened", date: "5th, Feb" },
      { step: 3, type: "Email", status: "Opened", date: "5th, Feb" },
    ],
  },
};

const DetailItem = ({ label, value, isDarkMode }) => (
  <div className="flex justify-between py-2 text-xs">
    <span className={isDarkMode ? "text-white" : "text-gray-800"}>{label}</span>
    <span className={`text-right ${isDarkMode ? "text-[#B9B9B9]" : "text-gray-600"} text-sm`}>{value}</span>
  </div>
);

const LeadDetails = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const ActivityItem = ({ step, type, status, date }) => (
    <div className="flex items-center mb-4">
      <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full p-2 mr-3`}>
        {type === "Email" && <Mail className={`w-4 h-4 ${isDarkMode ? "text-white" : "text-gray-600"}`} />}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>
            Step {step}: {type}
          </span>
          <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{date}</span>
        </div>
        <div className="flex items-center mt-1">
          {status === "Sent" ? (
            <Send className={`w-3 h-3 mr-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
          ) : (
            <Mail className={`w-3 h-3 mr-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
          )}
          <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${isDarkMode ? "bg-black" : "bg-white"} border-l h-[90vh] ${isDarkMode ? "border-[#353533]" : "border-gray-200"} ${isDarkMode ? "text-white" : "text-gray-800"} p-4 max-w-sm`}>
      <div className={`${isDarkMode ? "text-white bg-[#23272C]" : "text-gray-800 bg-gray-100"} text-sm font-semibold py-2 px-3 rounded-[8px] mb-4`}>
        Lead Details
      </div>

      <div className="mb-6">
        <DetailItem label="Name" value={leadData.name} isDarkMode={isDarkMode} />
        <DetailItem label="Contact No" value={leadData.contactNo} isDarkMode={isDarkMode} />
        <DetailItem label="Email ID" value={leadData.emailId} isDarkMode={isDarkMode} />
        <DetailItem label="Linkedin" value={leadData.linkedin} isDarkMode={isDarkMode} />
        <DetailItem label="Company Name" value={leadData.companyName} isDarkMode={isDarkMode} />
      </div>

      <div className={`${isDarkMode ? "text-white bg-[#23272C]" : "text-gray-800 bg-gray-100"} text-sm font-semibold py-2 px-3 rounded-[8px] mb-4`}>Activities</div>
      <div className="rounded-lg px-2 mb-2">
        
        <h4 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>{leadData.campaign.name}</h4>
        <div className={`flex justify-between text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
          <span>{leadData.campaign.steps} Steps</span>
          <span>{leadData.campaign.daysInSequence} Days in Sequence</span>
        </div>
        <div className="relative">
          <div className={`absolute top-0 bottom-0 left-5 w-px ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}></div>
          {leadData.campaign.activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;