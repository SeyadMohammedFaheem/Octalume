import React from "react";

const EnergyGraph = () => {
  return (
    <div className="bg-primary-container-bg p-5 h-96 justify-between rounded-3xl">
      <div className="flex justify-between items-center text-sm text-gray-400">
      <div className="flex flex-col justify-between text-sm text-gray-400 gap-2">

        <h2 className="font-primary text-primary-h2 text-primary-text gap-2">Electricity Consumed</h2>
      
        <p className="text-secondary-text">Peephole Cam (Video Doorbell)</p>

        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>

      <div className="h-56 ">
        {/* Placeholder for Chart */}
        <img src="/src/assets/Graph Vectors.svg"  />
      </div>
      <div className="flex flex-row justify-between text-sm text-gray-400 gap-2">
      <div className="flex flex-col justify-between text-sm text-gray-400 gap-2">

        <h3 className="font-primary text-primary-h3 text-primary-text gap-2">Average Electricity Consumed</h3>
      
        <p className="text-primary-default text-secondary-h1">10,800 kWh</p>

        </div>
        <div className="flex flex-col justify-between text-sm text-gray-400 gap-2">

        <h3 className="font-primary text-primary-h3 text-primary-text gap-2">Target Energy Consumption Goal</h3>
        <div className="flex flex-row justify-between text-sm text-gray-400 gap-2">
        <p className="text-primary-default text-secondary-h1">18,000 kWh</p>
        <p className="text-secondary-text text-secondary-h3">Edit Goal</p>
</div>
        </div>
        </div>
    </div>
  );
};

export default EnergyGraph;