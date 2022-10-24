import React, { useState, useEffect } from "react";
import { Step1, Step2, Step3, Step4 } from "./steps";

const CreateCampaign = ({ showCreateCampaign }) => {
  const [campaignType, setCampaignType] = useState("");
  const [product, setProduct] = useState("");
  const [campaignSettings, setCampaignSettings] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [stepNumber, setStepNumber] = useState(1);

  useEffect(() => {}, []);
  const steps = {
    "step-1": <Step1 campaignTypeActions={{ campaignType, setCampaignType }} />,
    "step-2": <Step2 productActions={{ product, setProduct }} />,
    "step-3": (
      <Step3
        campaignSettingsActions={{ campaignSettings, setCampaignSettings }}
      />
    ),
    "step-4": <Step4 thumbnailActions={{ thumbnail, setThumbnail }} />,
  };
  const checkForStep = (steps, stepNumber) => {
    switch (stepNumber) {
      case 1: {
        return steps["step-1"];
      }
      case 2: {
        if (!campaignType.length) {
          setStepNumber(stepNumber - 1);
          return null;
        } else {
          return steps["step-2"];
        }
      }
      case 3: {
        if (!product.length) {
          setStepNumber(stepNumber - 1);
          return null;
        } else {
          return steps["step-3"];
        }
      }
      case 4: {
        if (
          !campaignSettings ||
          !campaignSettings.startDate.length ||
          !campaignSettings.endDate.length ||
          !campaignSettings.budget.length ||
          !campaignSettings.location.length
        ) {
          setStepNumber(stepNumber - 1);
          return null;
        } else {
          return steps["step-4"];
        }
      }

      default:
        return null;
    }
  };

  const checkStep4AndStartCampaign = () => {
    if (!thumbnail.length) {
      return steps["step-4"];
    }

    // api call to create a campaign and show camapignLists
    fetch("http://localhost:5600/api/campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaignType: campaignType,
        product,
        startDate: campaignSettings.startDate,
        endDate: campaignSettings.endDate,
        location: campaignSettings.location,
        budget: +campaignSettings.budget,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        showCreateCampaign(false);
      });
  };
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl font-semibold">Your Ad Campaign</h1>
        <h5 className="font-light text-gray-500">
          Launch your ad in just 4 easy steps
        </h5>
      </div>
      <div className="steps mt-14 container mx-auto bg-white rounded-md p-4 mb-4 px-6">
        {checkForStep(steps, stepNumber)}
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={
            stepNumber === 4
              ? checkStep4AndStartCampaign
              : () => setStepNumber(stepNumber + 1)
          }
        >
          {stepNumber === 4 ? "Start campaign" : "continue"}
        </button>
      </div>
    </div>
  );
};

export default CreateCampaign;
