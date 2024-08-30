import { Outlet, useParams } from "react-router-dom";
import EmailDetails from "./EmailDetails";
import InboxDetails from "./InboxDetails";
import LeadDetailsComponent from "./LeadDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Inbox = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.user.token);

  const [email, setEmail] = useState([]);

  useEffect(() => {
    const fetchEmail = async () => {
      const response = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data);
      setEmail(response?.data?.data);
    };
    fetchEmail();
  }, [id, token]);

  return (
    <div className="w-full grid grid-cols-[280px_minmax(500px,1fr)_278px]">
      <div className="border-r border-[#33383F]">
        <InboxDetails />
      </div>
      <div className="">
        {id ? <EmailDetails id={id} email={email} /> : <Outlet />}
      </div>
      <div className="">
        <LeadDetailsComponent />
      </div>
    </div>
  );
};

export default Inbox;
