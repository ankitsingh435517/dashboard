import React, { useEffect, useState } from "react";

const Step3 = ({ campaignSettingsActions }) => {
  const [campaignSettingsData, setCampaignSettingsData] = useState({
    startDate: "",
    endDate: "",
    budget: "",
    location: "",
  });

  useEffect(() => {
    console.log('budget: ', campaignSettingsData)
    campaignSettingsActions.setCampaignSettings(campaignSettingsData);
  }, [campaignSettingsData, campaignSettingsActions]);

  const handleChange = (key, value) => {
    const _campaignSettingsData = { ...campaignSettingsData };
    _campaignSettingsData[key] = value;
    setCampaignSettingsData(_campaignSettingsData);
  };
  return (
    <div>
      <div className="title flex items-center border-b-4 border-gray-100 pb-2">
        <h3 className="pr-1">Campaign settings</h3>
        <span className="font-light text-sm text-gray-500">(step 3 of 4)</span>
      </div>
      <div className="body pt-6 pb-4 ">
        <div className="Budget">
          <div className="flex items-center">
            <span className="circle-border bg-blue-500 text-white">1</span>
            <h1 className="pl-2 underline underline-offset-2 font-semibold ">
              Budgets and date info
            </h1>
          </div>
          <div className="container mx-auto ml-2 border-l-4 p-4 border-gray-200 mt-2 ml-3">
            <div className="dates flex w-full items-center ">
              <div className="flex flex-col w-full mr-2">
                <label htmlFor="StartDate">Start Date</label>
                <input
                  type="date"
                  id="StartDate"
                  className="p-2 border-2 border-gray-200 rounded-md"
                  value={campaignSettingsData.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                />
              </div>
              <div className="flex  flex-col w-full mr-2">
                <label htmlFor="EndDate">End Date</label>
                <input
                  type="date"
                  id="EndDate"
                  className="p-2 border-2 border-gray-200 rounded-md"
                  value={campaignSettingsData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
            </div>
            <div className="budget-slider pt-4 pr-2">
              <div className="flex items-center justify-between">
                <h1>Enter campaign budget</h1>
                <div className="flex items-center">
                  <img
                    src="/assets/steps/step-3/India.png"
                    alt="indian flag icon"
                  />
                  <span>INR</span>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min={100}
                  max={100000}
                  className="w-full rounded-md bg-gray-100"
                  value={campaignSettingsData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="flex">
            <span className="circle-border bg-blue-500 text-white">2</span>
            <h1 className="pl-2 underline underline-offset-2 font-semibold ">
              Location info
            </h1>
          </div>
          <div className="container mx-auto p-4 pl-8">
            <div className="flex flex-col w-full mr-2">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                className="p-2 border-2 border-gray-200 rounded-md"
                value={campaignSettingsData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
