import React, { useState } from "react";
import cross from "../img/Vector (5).png";

const initialNotifications = [
  {
    id: 1,
    title: "Invite Your Friends!",
    date: "12 Mar 2021",
  },
  {
    id: 2,
    title: "Connect to your Facebook account.",
    date: "12 Mar 2021",
  },
  {
    id: 3,
    title: "New privacy alert!",
    date: "12 Mar 2021",
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg border border-[#e8eaec]">
        {/* Header Section */}
        <div className="bg-[#e8eaec] rounded-t-xl p-6">
          <h1 className="text-xl font-bold text-[#484848]">All Notifications</h1>
        </div>

        {/* Notification Items */}
        <div className="p-4 space-y-4">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex justify-between items-center border-b border-[#e8eaec] pb-4 last:border-none"
              >
                <div>
                  <h2 className="text-base font-semibold text-[#484848]">
                    {notification.title}
                  </h2>
                  <p className="text-xs text-[#9a9a9a]">{notification.date}</p>
                </div>
                <img
                  src={cross}
                  alt="Close"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => handleDelete(notification.id)}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-[#9a9a9a] text-sm">
              No notifications available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
