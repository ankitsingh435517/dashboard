import React from "react";

const Topbar = () => {
  return (
    <div className="topbar h-16 flex items-center justify-end pr-8">
      <div className="buyplan flex items-center justify-center pr-6">
        <h6 className="font-light">Free trial ends in 2 days</h6>
        <button className="buy-plan flex items-center justify-center px-4 py-2 rounded-md mx-4">
          <img src="/assets/nav/buy-plan.png" alt="golden crown icon" className="pr-2"/>
          <span>Buy Plan</span>
        </button>
        <button>
          <img src="/assets/nav/gift.png" alt="gift icon" />
        </button>
      </div>
      <div className="notification flex items-center justify-center pr-6">
        <img src="/assets/nav/notification.png" alt="bell icon" />
      </div>
      <div className="avatar flex items-center justify-center pr-6">
        <img
          src="/assets/nav/avatar.png"
          alt="avatar icon"
          className="rounded-full pr-2"
        />
        <h5>Mukund cake shop</h5>
        <img src="/assets/nav/drop-down.png" alt="drop down icon" className="pl-2"/>
      </div>
      <div className="language">
        <img src="/assets/nav/language.png" alt="language selection icon" />
      </div>
    </div>
  );
};

export default Topbar;
