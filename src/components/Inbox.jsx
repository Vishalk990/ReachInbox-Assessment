import EmailDetails from "./EmailDetails";
import InboxDetails from "./InboxDetails";
import LeadDetailsComponent from "./LeadDetails";

const Inbox = () => {
  return (
    <div className="w-full grid grid-cols-[280px_minmax(500px,1fr)_278px] gap-2">
      <div className="border-r border-[#33383F]">
        <InboxDetails />
      </div>
      <div className="border border-white">
        <EmailDetails />
      </div>
      <div className="border border-white">
        <LeadDetailsComponent />
      </div>
    </div>
  );
};

export default Inbox;
