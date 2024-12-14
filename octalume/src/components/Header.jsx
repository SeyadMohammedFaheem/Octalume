import React, { useState } from "react";
import RoomTabButton from "./RoomTabButton";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Living Room");

  const rooms = [
    "Living Room",
    "Dining Room",
    "Bedroom",
    "Bathroom",
    "Kidsroom",
    "Kitchen",
  ];

  return (
    <div className="flex  items-center justify-between  mb-10 rounded-xl">
      {/* Logo */}
      <img
        src="/src/assets/logo.png"
        alt="OctaLume Logo"
        className="h-10"
      />
      <div className="flex items-center space-x-4">
        {/* Regular Tabs */}
        {rooms.map((room, index) => (
          <RoomTabButton
            key={index}
            label={room}
            isActive={room === activeTab}
            onClick={() => setActiveTab(room)}
          />
        ))}
        {/* Outlined Add Room Button */}
        <RoomTabButton
          label="Add Room"
          variant="outline"
         
        />
      </div>
      <div className="flex items-center space-x-4">
        {/* Profile Icons */}
        <div className="w-10 h-10 rounded-full bg-gray-600"></div>
        <div className="w-10 h-10 rounded-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Header;
