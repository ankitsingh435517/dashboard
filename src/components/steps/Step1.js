import React, { useEffect, useState } from "react";

const Step1 = ({ campaignTypeActions }) => {
  const [activeDiv, setActiveDiv] = useState("");
  const [campaignTypesData, setCampaignTypesData] = useState([]);
  useEffect(() => {
    const type = campaignTypesData.find((type) => type._id === activeDiv);
    if(type){
      campaignTypeActions.setCampaignType(type.title);
    }
  }, [activeDiv, campaignTypeActions]);

  useEffect(() => {
    fetch("http://localhost:5600/api/campaign/types")
      .then((res) => res.json())
      .then((data) => {
        setCampaignTypesData(data.campaignTypes);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="title flex items-center border-b-4 border-gray-100 pb-2">
        <h3 className="pr-1">What you want to do?</h3>
        <span className="font-light text-sm text-gray-500">(step 1 of 4)</span>
      </div>
      <div className="body pt-6 pb-4 grid grid-cols-3 gap-4">
        {campaignTypesData.map((type) => (
          <Tile data={type} active={{ activeDiv, setActiveDiv }} />
        ))}
      </div>
    </div>
  );
};

function Tile({ data, active }) {
  return (
    <div
      onClick={() => active.setActiveDiv(data._id)}
      className={`${
        active.activeDiv === data._id ? "border-blue-500" : "border-gray-200"
      } cursor-pointer flex items-center border-2 rounded-md p-2`}
    >
      <img src="/assets/steps/step-1/phone-call.png" alt="call icon" />
      <div className="pl-2 w-full relative">
        <h3>{data.title}</h3>
        <span className="font-light text-sm text-gray-500">
          Reach broad audience and get leads through calls
        </span>
        {active.activeDiv === data._id && (
          <img
            className="blue-tick"
            src="/assets/steps/step-2/tick-circle-blue.png"
            alt="blue tick icon"
          />
        )}
      </div>
    </div>
  );
}

export default Step1;
