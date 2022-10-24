import { useState } from "react";

import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import CampaignsList from "./CampaignsList.js";
import CreateCampaign from "./CreateCampaign.js";

function Layout() {
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  return (
    <div className="flex layout">
      <Sidebar />
      <div className="main w-full pb-16">
        <Topbar />
        <div className="container mx-auto mt-14 ">
          {showCreateCampaign ? (
            <CreateCampaign showCreateCampaign={setShowCreateCampaign} />
          ) : (
            <CampaignsList showCreateCampaign={setShowCreateCampaign} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
