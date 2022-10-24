import React, { useEffect, useState } from "react";

const Step2 = ({ productActions }) => {
  const [activeDiv, setActiveDiv] = useState("");
  const [campaignProductsData, setCampaignProductsData] = useState([]);
  useEffect(() => {
    const product = campaignProductsData.find((product) => product._id === activeDiv);
    if(product){
      productActions.setProduct(product.title);
    }
  }, [activeDiv, productActions]);
  useEffect(() => {
    fetch("http://localhost:5600/api/campaign/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setCampaignProductsData(data.campaignProducts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="title flex items-center border-b-4 border-gray-100 pb-2">
        <h3 className="pr-1">Choose the product</h3>
        <span className="font-light text-sm text-gray-500">(step 2 of 4)</span>
      </div>
      <div className="body pt-6 pb-4 grid grid-cols-3 gap-4">
        {
          campaignProductsData.map((product) => <Tile data={product} active={{ activeDiv, setActiveDiv }} />
        )
        }
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
      <img src="/assets/steps/step-2/Chocolate truffle cake.png" alt="cake" />
      <div className="pl-2 w-full">
        <h3>{data.title}</h3>
        <span className="font-light text-sm text-gray-500">Rs.{data.price}</span>
      </div>
      {active.activeDiv === data._id ? (
        <img
          src="/assets/steps/step-2/tick-circle-blue.png"
          alt="blue tick icon"
        />
      ) : (
        <img
          src="/assets/steps/step-2/tick-circle-white.png"
          alt="white tick icon"
        />
      )}
    </div>
  );
}

export default Step2;
