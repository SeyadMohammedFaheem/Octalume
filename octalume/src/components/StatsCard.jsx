import React from 'react';

const StatsCard = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg h-full">
      <h2 className="text-white text-lg font-bold mb-4">Electricity Consumed</h2>
      <p className="text-gray-400 mb-4">Peephole Cam (Video Doorbell)</p>

      <div className="grid grid-cols-3 gap-4 h-56">
        <div className="bg-gray-700 rounded-lg h-full relative">
          <div className="bg-gradient-to-b from-gray-700 to-black absolute top-0 left-0 right-0 h-3/4 rounded-t-lg"></div>
          <p className="text-white text-center absolute bottom-4 left-0 right-0">100kWh</p>
          <p className="text-gray-400 text-center absolute bottom-2 left-0 right-0">Kids Room</p>
        </div>
        <div className="bg-gray-700 rounded-lg h-full relative">
          <div className="bg-gradient-to-b from-gray-700 to-black absolute top-0 left-0 right-0 h-2/3 rounded-t-lg"></div>
          <p className="text-white text-center absolute bottom-4 left-0 right-0">150kWh</p>
          <p className="text-gray-400 text-center absolute bottom-2 left-0 right-0">Bedroom</p>
        </div>
        <div className="bg-gray-700 rounded-lg  relative">
          <div className="bg-gradient-to-b from-green-500 to-yellow-500 absolute top-0 left-0 right-0 h-full rounded-t-lg"></div>
          <p className="text-white text-center absolute bottom-4 left-0 right-0">200kWh</p>
          <p className="text-gray-400 text-center absolute bottom-2 left-0 right-0">Living Room</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;