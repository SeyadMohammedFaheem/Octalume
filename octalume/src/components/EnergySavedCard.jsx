import React from "react";

const EnergySavedCard = () => {
  return (
    <div className="bg-secondary-container-bg rounded-3xl p-5 flex justify-between items-start shadow-md text-black w-full max-w-lg">
      {/* Content Section */}
      <div className="flex flex-col gap-2">
      <h2 className="font-primary text-primary-h2 text-primary-text-inverse gap-2">Electricity Consumed By Rooms</h2>
      <p className="text-secondary-text">Peephole Cam (Video Doorbell)</p>

        <div className="flex items-end gap-2 mt-2 justify-between w-full ">
          <span className="text-4xl w-2/4 font-bold">4300 kWh</span>
          <span className="text-sm text-gray-700">3% savings then the last month</span>
        </div>
      </div>

      {/* Arrow Icon */}
      <div>
      <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>
    </div>
  );
};

export default EnergySavedCard;
