import React from "react";

const DeviceCard = ({ deviceName, status, energyConsumption }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold">{deviceName}</h3>
        <p className="text-sm text-gray-400">{status}</p>
      </div>
      <p className="text-green-400 font-bold">{energyConsumption}</p>
    </div>
  );
};

export default DeviceCard;
