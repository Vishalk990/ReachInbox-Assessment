
import { Mail, Send } from 'lucide-react';
const leadData = {
  name: 'Orlando',
  contactNo: '+54-9062827869',
  emailId: 'orlando@gmail.com',
  linkedin: 'linkedin.com/in/timvadde/',
  companyName: 'Reachinbox',
  campaign: {
    name: 'Campaign Name',
    steps: 3,
    daysInSequence: 5,
    activities: [
      { step: 1, type: 'Email', status: 'Sent', date: '3rd, Feb' },
      { step: 2, type: 'Email', status: 'Opened', date: '5th, Feb' },
      { step: 3, type: 'Email', status: 'Opened', date: '5th, Feb' },
    ],
  },
};

const LeadDetails = () => {
 

  const DetailItem = ({ label, value }) => (
    <div className="flex justify-between py-2 border-b border-gray-700">
      <span className="text-gray-400">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );

  const ActivityItem = ({ step, type, status, date }) => (
    <div className="flex items-center mb-4">
      <div className="bg-gray-700 rounded-full p-2 mr-3">
        {type === 'Email' && <Mail className="w-4 h-4" />}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <span>Step {step}: {type}</span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <div className="flex items-center mt-1">
          {status === 'Sent' ? (
            <Send className="w-3 h-3 mr-1" />
          ) : (
            <Mail className="w-3 h-3 mr-1" />
          )}
          <span className="text-xs text-gray-400">{status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#000000] text-white p-4 max-w-sm">
      <h2 className="text-lg font-bold mb-4">Lead Details</h2>
      
      <div className="mb-6">
        <DetailItem label="Name" value={leadData.name} />
        <DetailItem label="Contact No" value={leadData.contactNo} />
        <DetailItem label="Email ID" value={leadData.emailId} />
        <DetailItem label="Linkedin" value={leadData.linkedin} />
        <DetailItem label="Company Name" value={leadData.companyName} />
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">Activities</h3>
        <h4 className="font-semibold mb-2">{leadData.campaign.name}</h4>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{leadData.campaign.steps} Steps</span>
          <span>{leadData.campaign.daysInSequence} Days in Sequence</span>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-700"></div>
          {leadData.campaign.activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;