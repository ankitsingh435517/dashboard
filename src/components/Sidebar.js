import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar w-20 pt-10 flex flex-col items-center'>
        <div className="logo">
          <img src="/assets/sidebar/logo.png" alt="rocket icon" />
        </div>
        <div className="menu text-white font-thin text-sm mt-14">
          <div className='flex flex-col items-center mb-8'>
            <img src="/assets/sidebar/house.png" alt="house icon" />
            <span>Home</span>
          </div>
          <div className='flex flex-col items-center mb-8 border-l-4 border-blue-600 active-menu p-2'>
            <img src="/assets/sidebar/volume-high.png" alt="speaker icon" />
            <span>Campaign</span>
          </div>
          <div className='flex flex-col items-center mb-8'>
            <img src="/assets/sidebar/bag.png" alt="bag icon" />
            <span>Products</span>
          </div>
          <div className='flex flex-col items-center mb-8'>
            <img src="/assets/sidebar/profile-2user.png" alt="2 users icon" />
            <span>Customers</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar