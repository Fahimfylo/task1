import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup"; // Common path from your previous code

import { SlArrowDown } from "react-icons/sl"; // Import SlArrowDown icon


const NearestStationPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [stationType, setStationType] = useState(initialData?.stationType || ""); // Default from screenshot (Select)
  const [distance, setDistance] = useState(initialData?.distance || "");
  const [distanceUnit, setDistanceUnit] = useState(initialData?.distanceUnit || "Mile"); // Default from screenshot
  const [stationName, setStationName] = useState(initialData?.stationName || "");

  const handleSave = () => {
    console.log({
      stationType,
      distance,
      distanceUnit,
      stationName,
    });
    onSaveData({
      stationType,
      distance,
      distanceUnit,
      stationName,
    });
    onClose(); 
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Add nearest station" // Title from screenshot
      onClose={onClose}
      onSave={handleSave} // Calls handleSave on "Add" button click
    >
      <div className="flex flex-col w-[780px] px-6 py-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="stationType" className="font-medium text-gray-800 mb-2">
              Nearest station type<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                id="stationType"
                className="border text-[15px] font-medium text-gray-600 border-gray-300 rounded-lg px-4 h-[48px] w-full appearance-none bg-white pr-8 focus:ring-blue-500 focus:border-blue-500"
                value={stationType}
                onChange={(e) => setStationType(e.target.value)}
              >
                <option value="">Select</option> {/* Placeholder "Select" */}
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Metro">Metro</option>
                <option value="Tram">Tram</option>
                <option value="Airport">Airport</option>
              </select>
              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="distance" className="font-medium text-gray-600 mb-2">
              Distance from property<span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300 rounded-lg h-[48px] overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <input
                type="number"
                id="distance"
                placeholder="1.5" // Placeholder from screenshot
                className="px-4 text-[15px] font-medium w-full flex-1 outline-none bg-transparent"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
              <div className="relative flex-shrink-0 w-[100px] border-l border-gray-300 bg-white">
                <select
                  id="distanceUnit"
                  className="text-[15px] font-medium px-4 h-full w-full appearance-none bg-transparent outline-none cursor-pointer"
                  value={distanceUnit}
                  onChange={(e) => setDistanceUnit(e.target.value)}
                >
                  <option value="Mile">Mile</option>
                  <option value="Km">Km</option>
                </select>
                <SlArrowDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nearest station name */}
        <div className="flex flex-col">
          <label htmlFor="stationName" className="font-medium text-gray-800 mb-2">
            Nearest station name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="stationName"
            placeholder="Enter name" // Placeholder from screenshot
            className="border text-[15px] font-medium border-gray-300 placeholder:text-gray-600 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
          />
        </div>
      </div>
    </ReusablePopup>
  );
};

export default NearestStationPopup;
