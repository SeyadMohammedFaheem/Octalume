import React from "react";

const EnergyGraph = () => {
  return (
    <div className="bg-[#171717] p-5 h-96 rounded-xl">
      <div className="flex justify-between items-center text-sm text-gray-400">
      <div className="flex flex-col justify-between text-sm text-gray-400">

        <h2 className="text-lg font-semibold gap-2">Electricity Consumed</h2>
        <p>Peephole Cam (Video Doorbell)</p>
        </div>
        <button
          className="bg-[#2F2F2F] text-white px-4 py-4 rounded-full"
        >
          <img
        src="/src/assets/up arrow.svg"
      />
        </button>
      </div>

      <div className="bg-gray-700 rounded-lg">
        {/* Placeholder for Chart */}
        <p className="text-center text-gray-400 pt-12">Graph goes here...</p>
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <p>Average Electricity Consumed</p>
        <p>Target Energy Consumption Goal</p>
      </div>
    </div>
  );
};

export default EnergyGraph;