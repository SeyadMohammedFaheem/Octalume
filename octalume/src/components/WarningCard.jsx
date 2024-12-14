import React from "react";

const WarningCard = ({ message, type }) => {
  const color = type === "warning" ? "text-yellow-400" : "text-red-400";
  return (
    <div className={`bg-[#171717] p-4 rounded-xl ${color}`}>
      <h3 className="font-bold">Warning!!!</h3>
      <p className="text-gray-400">{message}</p>
    </div>
  );
};

export default WarningCard;
