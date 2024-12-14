import React from "react";

const RoomTabButton = ({ label, onClick, isActive, variant = "default" }) => {
  return (
    <button
      className={`px-8 py-4 rounded-2xl ${
        variant === "outline"
          ? "border border-tertiary-button-border text-tertiary-button-text bg-transparent"
          : isActive
          ? "bg-primary-button-fill text-primary-button-text"
          : "bg-secondary-button-fill text-secondary-button-text"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default RoomTabButton;
