import React from "react";

// EnergySavingItem: Single List Row Component
const EnergySavingItem = ({ icon, deviceName, energyValue }) => {
  return (
    <div className="flex items-center justify-between w-full py-3">
      {/* Icon & Device Info */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="bg-gray-800 rounded-full w-12 h-12 flex justify-center items-center">
          <img src={icon} alt={deviceName} className="w-6 h-6" />
        </div>
        {/* Device Details */}
        <div className="flex flex-col">
          <span className="text-white font-medium">{deviceName}</span>
          <span className="text-gray-500 text-sm">
            3% savings then the last month
          </span>
        </div>
      </div>
      {/* Energy Consumption */}
      <div className="text-[#DFFF4F] font-semibold text-lg">
        {energyValue} <span className="text-sm">kWh</span>
      </div>
    </div>
  );
};

// Main Component
const EnergySavingList = () => {
  const devices = [
    {
      name: "Television",
      icon: "/icons/television.svg",
      value: 234,
    },
    {
      name: "Refrigerator",
      icon: "/icons/refrigerator.svg",
      value: 623,
    },
    {
      name: "Air Conditioner",
      icon: "/icons/air-conditioner.svg",
      value: 843,
    },
    {
      name: "Smart Light",
      icon: "/icons/light-bulb.svg",
      value: 23,
    },
  ];

  return (
    <div className="bg-[#111111] rounded-2xl p-6 w-full max-w-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-white font-medium text-lg">Energy saving</h3>
          <p className="text-gray-500 text-sm">April</p>
        </div>
        {/* Button */}
        <button className="bg-[#333333] text-white rounded-full p-3 hover:bg-gray-700">
          <span className="text-lg">↗</span>
        </button>
      </div>

      {/* List of Energy Items */}
      <div className="space-y-4">
        {devices.map((device) => (
          <EnergySavingItem
            key={device.name}
            icon={device.icon}
            deviceName={device.name}
            energyValue={device.value}
          />
        ))}
      </div>
    </div>
  );
};

export default EnergySavingList;
