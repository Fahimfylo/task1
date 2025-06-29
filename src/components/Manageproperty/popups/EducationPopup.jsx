import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";

const EducationPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [institutionType, setInstitutionType] = useState(
    initialData?.institutionType || "High school"
  );
  const [distance, setDistance] = useState(initialData?.distance || "");
  const [distanceUnit, setDistanceUnit] = useState(
    initialData?.distanceUnit || "Mile"
  );
  const [institutionName, setInstitutionName] = useState(
    initialData?.institutionName || ""
  );

  const handleSave = () => {
    console.log({
      institutionType,
      distance,
      distanceUnit,
      institutionName,
    });
    onSaveData({
      institutionType,
      distance,
      distanceUnit,
      institutionName,
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Add nearest educational institution"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] px-6 py-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="institutionType"
              className="font-medium text-gray-800 mb-2"
            >
              Educational institution type
              <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                id="institutionType"
                className="border text-[15px] font-medium text-gray-600 border-gray-300 rounded-lg px-4 h-[48px] w-full appearance-none bg-white pr-8 focus:ring-blue-500 focus:border-blue-500"
                value={institutionType}
                onChange={(e) => setInstitutionType(e.target.value)}
              >
                <option value="High school">High school</option>
                <option value="Elementary school">Elementary school</option>
                <option value="University">University</option>
                <option value="College">College</option>
              </select>
              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="distance"
              className="font-medium text-gray-600 mb-2"
            >
              Distance from property<span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300 rounded-lg h-[48px] overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <input
                type="number"
                id="distance"
                placeholder="1.5"
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

        <div className="flex flex-col">
          <label
            htmlFor="institutionName"
            className="font-medium text-gray-800 mb-2"
          >
            Educational institution name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="institutionName"
            placeholder="Enter name"
            className="border text-[15px] font-medium border-gray-300 placeholder:text-gray-600 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </div>
      </div>
    </ReusablePopup>
  );
};

export default EducationPopup;
