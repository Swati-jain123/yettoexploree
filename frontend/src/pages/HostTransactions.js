import React, { useState } from 'react';
import Downloadimg from "../img/eos-icons_csv-file.png";
export default function HostTransactions() {
  const [activeTab, setActiveTab] = useState('completed'); // State to track active tab
  const [completedTransactions, setCompletedTransactions] = useState([
    {
      id: 1,
      title: 'Transaction Title',
      date: '12 Mar 2021 at 2:00 PM',
      amount: '$1000 USD',
    },
    {
      id: 2,
      title: 'Transaction Title',
      date: '12 Mar 2021 at 2:00 PM',
      amount: '$1000 USD',
    },
  ]);

  const [upcomingTransactions, setUpcomingTransactions] = useState([
    {
      id: 1,
      title: 'Transaction Title',
      date: '15 Apr 2021 at 10:00 AM',
      amount: '$500 USD',
    },
    {
      id: 2,
      title: 'Transaction Title',
      date: '20 Apr 2021 at 11:00 AM',
      amount: '$750 USD',
    },
  ]);

  const [grossEarnings, setGrossEarnings] = useState('$5000 USD');

  const renderTransactions = (transactions) =>
    transactions.map((transaction) => (
      <div
        key={transaction.id}
        className="flex justify-between items-center p-4 mb-4 bg-gray-100 rounded-md"
      >
        <div>
          <div className="text-[#484848] text-base font-bold font-montserrat">
            {transaction.title}
          </div>
          <div className="text-sm text-gray-500 font-montserrat">
            {transaction.date}
          </div>
        </div>
        <div className="text-[#484848] text-base font-bold font-montserrat">
          {transaction.amount}
        </div>
      </div>
    ));

  return (
    <div className="mx-[100px]">
      {/* Header */}
      <div className="w-[382px] h-[53px] text-[#484848] text-[38px] font-extrabold font-montserrat">
        Transaction History
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-8">
          <div
            onClick={() => setActiveTab('completed')}
            className={`text-lg font-bold font-montserrat cursor-pointer ${
              activeTab === 'completed' ? 'text-[#484848]' : 'text-gray-400'
            }`}
          >
            Completed
          </div>
          <div
            onClick={() => setActiveTab('upcoming')}
            className={`text-lg font-bold font-montserrat cursor-pointer ${
              activeTab === 'upcoming' ? 'text-[#484848]' : 'text-gray-400'
            }`}
          >
            Upcoming
          </div>
          <div
            onClick={() => setActiveTab('grossEarning')}
            className={`text-lg font-bold font-montserrat cursor-pointer ${
              activeTab === 'grossEarning' ? 'text-[#484848]' : 'text-gray-400'
            }`}
          >
            Gross Earning
          </div>
        </div>

        {/* Download Section */}
        <button className="flex items-center space-x-2 text-[#484848] font-montserrat font-semibold">
          <img src={Downloadimg} alt="img"></img>
          <span>Download</span>
        </button>
      </div>

      {/* Black Line */}
      <div className="relative mt-1">
        <div
          className={`absolute transition-all duration-300 ${
            activeTab === 'completed'
              ? 'left-0 w-[110px]'
              : activeTab === 'upcoming'
              ? 'left-[120px] w-[95px]'
              : 'left-[230px] w-[120px]'
          } h-[3px] bg-[#484848]`}
        />
      </div>

      {/* Transactions List */}
      <div className="mt-6">
        {activeTab === 'completed' && renderTransactions(completedTransactions)}
        {activeTab === 'upcoming' && renderTransactions(upcomingTransactions)}
        {activeTab === 'grossEarning' && (
          <div className="text-[#484848] text-[24px] font-bold font-montserrat">
            Total Gross Earnings: {grossEarnings}
          </div>
        )}
      </div>
    </div>
  );
}
