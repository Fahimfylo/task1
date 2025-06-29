import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";

const ParkingPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [parkingTime, setParkingTime] = useState(
    initialData?.parkingTime || "2H"
  );
  const [parkingOverview, setParkingOverview] = useState(
    initialData?.parkingOverview || ""
  );
  const maxCharacters = 200;

  const handleSave = () => {
    toast.success("Saved successfully!", {});
    onSaveData({
      parkingTime,
      parkingOverview,
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Parking"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] h-[225px] px-6 py-6 space-y-4 overflow-hidden">
        <div className="flex flex-col mb-4">
          <div className="flex items-center border w-[348px] border-gray-300 rounded-lg h-[48px] overflow-hidden focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
            <span className="px-4 text-gray-800 font-medium">
              Guest vehicle parking time
            </span>
            <div className="relative ml-10 flex-shrink-0 w-[68px] bg-white">
              <select
                id="parkingTime"
                className="text-sm h-full p-1 rounded-lg border border-gray-300 w-full font-semibold appearance-none bg-transparent cursor-pointer"
                value={parkingTime}
                onChange={(e) => setParkingTime(e.target.value)}
              >
                <option value="2H">2H</option>
                <option value="4H">4H</option>
                <option value="6H">6H</option>
                <option value="24H">24H</option>
              </select>
              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={14}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <textarea
            id="parkingOverview"
            placeholder="Write parking overview"
            className="border font-semibold text-[15px] border-gray-300 placeholder:text-gray-500 rounded-lg p-4 w-full h-full focus:ring-blue-500 focus:border-blue-500 resize-y" // h-full and resize-none
            value={parkingOverview}
            onChange={(e) => {
              if (e.target.value.length <= maxCharacters) {
                setParkingOverview(e.target.value);
              }
            }}
            rows={4}
          ></textarea>
          <div className="text-right text-xs text-gray-500 mt-1">
            {parkingOverview.length}/{maxCharacters}
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default ParkingPopup;
