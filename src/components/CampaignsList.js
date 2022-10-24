import React, { useState, useEffect } from "react";

const CampaignsList = ({ showCreateCampaign }) => {
  const [campaignList, setCampaignList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5600/api/campaign")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setCampaignList(data.campaigns);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5600/api/campaign/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      setRefresh(!refresh);
    })
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <h1 className="text-2xl font-semibold">Your Campaigns</h1>
          <h5 className="font-light text-gray-500">
            Check the list of campaigns you created
          </h5>
        </div>
        <button
          className="px-6 py-2 rounded-md bg-blue-500 flex items-center  text-white"
          onClick={() => showCreateCampaign(true)}
        >
          <img
            className="pr-4"
            src="/assets/add-circle.png"
            alt="add circle icon"
          />
          <span>Create new campaign</span>
        </button>
      </div>
      <div className="table-container bg-white p-6 rounded-md">
        <div className="filters-and-search mb-4 flex items-center justify-between">
          <div className="search-box border-2 flex items-center p-2 rounded-md">
            <img src="/assets/search-normal.png" alt="search icon" />
            <input
              type="text"
              className="ml-2"
              placeholder="Search for the campaign"
            />
          </div>
          <div className="filters flex items-center justify-between">
            <div className="flex items-center mr-4">
              <label className="text-gray-500 font-sm" htmlFor="platform">
                Platform:
              </label>
              <select
                id="platform"
                className="py-2 px-3 border-2 ml-2 rounded-md"
              >
                <option value="All Platform">All Platform</option>
                <option value="Facebook">Facebook</option>
                <option value="Google">Google</option>
                <option value="Youtube">Youtube</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>
            <div className="flex items-center mr-4">
              <label className="text-gray-500 font-sm" htmlFor="status">
                Status:
              </label>
              <select
                id="status"
                className="py-2 px-3 border-2 ml-2 rounded-md"
              >
                <option value="All Status">All Status</option>
                <option value="Pause">Pause</option>
                <option value="Exhausted">Exhausted</option>
              </select>
            </div>
            <div className="flex items-center mr-4">
              <select id="date" className="py-2 px-3 border-2 ml-2 rounded-md">
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 20 days">Last 20 days</option>
                <option value="Last 10 days">Last 10 days</option>
              </select>
            </div>
          </div>
        </div>

        <table className="w-full">
          <th className="bg-gray-100 px-4 py-2 rounded-md">
            <tr className="flex items-center justify-between text-sm text-gray-800 font-light">
              <tc className="">
                <td>
                  <img src="/assets/serial.png" alt="serial box icon" />
                </td>
              </tc>
              <tc className="">
                <td>
                  <span>On/Off</span>
                </td>
              </tc>
              <tc className="w-72">
                <td colspan="4">
                  <span>Campaign</span>
                </td>
              </tc>
              <tc className="w-36">
                <td>
                  <span>Date Range</span>
                </td>
              </tc>
              <tc className="w-10">
                <td>
                  <span>Clicks</span>
                </td>
              </tc>
              <tc className="w-20">
                <td>
                  <span>Budget</span>
                </td>
              </tc>
              <tc className="w-16">
                <td>
                  <span>Location</span>
                </td>
              </tc>
              <tc className="w-16">
                <td>
                  <span>Platform</span>
                </td>
              </tc>
              <tc className="w-20">
                <td>
                  <span>Status</span>
                </td>
              </tc>
              <tc className="w-16">
                <td>
                  <span>Actions</span>
                </td>
              </tc>
            </tr>
          </th>
          <tbody className="">
            <div className="mt-2">
              {
                campaignList.map((campaign) => <TableRow campaign={campaign} handleDelete={handleDelete} />)
              }
              </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignsList;

function TableRow({ campaign, handleDelete }) {
  const trim = (date) => {
    return date.substring(0,10);
  }
  
  return (
    <tr className="px-4 py-2 flex items-center justify-between">
      <tc className="w-5">
        <td>
          <img src="/assets/serial.png" alt="serial box icon" />
        </td>
      </tc>
      <tc className="w-10">
        <td>
          <img src="/assets/Toggle-btns/Toggle-on.png" alt="toggle on icon" />
        </td>
      </tc>
      <tc className="w-70">
        <td colspan="4">
          <div className="flex items-center justify-between">
            <img
              src="/assets/thumbnails/blueberry-cake-campaign.png"
              alt="blueberry cake photo"
            />
            <div className="pl-2">
              <h2>{campaign.title}</h2>
              <h6 className="text-sm text-gray-500 font-light">
                Created on 14 july
              </h6>
            </div>
          </div>
        </td>
      </tc>
      <tc className="w-60">
        <td>
          <span>{trim(campaign.startDate)} -- {trim(campaign.endDate)}</span>
        </td>
      </tc>
      <tc className="w-10 ">
        <td>
          <span>{campaign.clicks}</span>
        </td>
      </tc>
      <tc className="w-20 ">
        <td>
          <span>INR {campaign.budget}</span>
        </td>
      </tc>
      <tc className="w-16 ">
        <td>
          <span>{campaign.location}</span>
        </td>
      </tc>
      <tc className="w-10 ">
        <td>
          <img src="/assets/social/FB.png" alt="social icon" />
        </td>
      </tc>
      <tc className="w-24 ">
        <td>
          <span className="px-3 py-1 rounded-md bg-green-200 text-green-800">
            {campaign.status}
          </span>
        </td>
      </tc>
      <tc className="w-16 ">
        <td>
          <div className="flex items-center justify-between">
            <img
              className="pr-4"
              src="/assets/actions/edit-2.png"
              alt="pen icon"
            />
            <img
              src="/assets/actions/trash.png"
              alt="trash icon"
              className="cursor-pointer"
              onClick={() => handleDelete(campaign._id)}
            />
          </div>
        </td>
      </tc>
    </tr>
  );
}
