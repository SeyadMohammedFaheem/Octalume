import React from "react";
import Header from "./components/Header";
import EnergyGraph from "./components/EnergyGraph";
import DeviceCard from "./components/DeviceCard";
import WarningCard from "./components/WarningCard";
import StatsCard from "./components/StatsCard";
import MediaPlayer from "./components/MediaPlayer"; // Import MediaPlayer

const App = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen px-8  pt-8 pb-12">
      {/* Header */}
      <Header />
      <div className="flex flex-col gap-5 ">
      

      {/* Main Dashboard Layout */}
      <div className="flex flex-row gap-5">
        {/* Energy Graph */}
      <div className=" w-2/3 ">
        <EnergyGraph />
      </div>
        {/* Stats Card */}
        <div className="w-1/3">
          <StatsCard
            title="Energy Consumed by Rooms"
            details="Living Room"
            value="10,800 kWh"
          />
        </div>
        </div>

        {/* Warning Card */}
        <div>
          <WarningCard
            message="Windows are opened in the kids room"
            type="warning"
          />
        </div>
      </div>

      {/* Device Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <DeviceCard
          deviceName="Television"
          status="On"
          energyConsumption="230 kWh"
        />
        <DeviceCard
          deviceName="Air Conditioner"
          status="Auto Mode"
          energyConsumption="800 kWh"
        />
      </div>

      {/* Media Player */}
      <div className="mt-6">
        <MediaPlayer song="Bad Guy - Billie Eilish" />
      </div>
    </div>
  );
};

export default App;
