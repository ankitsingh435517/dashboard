import React, { useEffect, useState } from "react";

const Step4 = ({ thumbnailActions }) => {
  const [activeDiv, setActiveDiv] = useState("");
  useEffect(() => {
    thumbnailActions.setThumbnail(activeDiv);
  }, [activeDiv, thumbnailActions]);
  return (
    <div>
      <div className="title flex items-center border-b-4 border-gray-100 pb-2">
        <h3 className="pr-1">Ready to go</h3>
        <span className="font-light text-sm text-gray-500">(step 4 of 4)</span>
      </div>
      <div className="body pt-6 pb-4 grid grid-cols-4 gap-3">
        <Card id="1" active={{ activeDiv, setActiveDiv }} />
        <Card id="2" active={{ activeDiv, setActiveDiv }} />
        <Card id="3" active={{ activeDiv, setActiveDiv }} />
        <Card id="4" active={{ activeDiv, setActiveDiv }} />
      </div>
    </div>
  );
};

function Card({ id, active }) {
  return (
    <div
      onClick={() => active.setActiveDiv(id)}
      className={`${
        active.activeDiv === id ? "border-blue-500" : "border-gray-200"
      } cursor-pointer relative border-2 rounded-md p-2`}
    >
      <div className="flex items-center">
        <img src="/assets/steps/step-3/avatar.png" alt="avatar" />
        <div className="pl-2">
          <h1 className="text-blue-800">Mukund Cake Shop</h1>
          <span className="text-gray-500 text-sm">sponsored</span>
        </div>
      </div>
      <h1 className="py-2">
        We are the best bakery around you. Please like my page to get updates on
        exciting offers and discounts
      </h1>
      <img src="/assets/steps/step-3/thumbnail.png" alt="muffin" />
        {active.activeDiv === id && (
          <img
            className="blue-tick-2"
            src="/assets/steps/step-2/tick-circle-blue.png"
            alt="blue tick icon"
          />
        )}
    </div>
  );
}

export default Step4;
