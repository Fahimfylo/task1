import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup"; // Common path from your previous code
import { SlArrowDown } from "react-icons/sl"; // Import SlArrowDown icon

const PetFeesPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [petType, setPetType] = useState(initialData?.petType || "");
  const [maxWeight, setMaxWeight] = useState(initialData?.maxWeight || "");
  const [oneTimeFee, setOneTimeFee] = useState(initialData?.oneTimeFee || "");
  const [securityDeposit, setSecurityDeposit] = useState(
    initialData?.securityDeposit || ""
  );
  const [monthlyRent, setMonthlyRent] = useState(
    initialData?.monthlyRent || ""
  );

  const handleSave = () => {
    console.log({
      petType,
      maxWeight,
      oneTimeFee,
      securityDeposit,
      monthlyRent,
    });
    onSaveData({
      petType,
      maxWeight,
      oneTimeFee,
      securityDeposit,
      monthlyRent,
    });
    onClose(); // Close the popup after saving
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Pet fees" // Title from screenshot
      onClose={onClose}
      onSave={handleSave} // Calls handleSave on "Add" button click
    >
      <div className="flex flex-col w-[780px] h-[234px] px-6 py-6 space-y-6 overflow-hidden">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="petType"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              Pet type<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                id="petType"
                className="border text-[15px] text-gray-600 border-gray-300 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500 font-semibold appearance-none bg-white pr-8" // Added pr-8 and appearance-none
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option value="">Select</option> {/* Placeholder "Select" */}
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Max weight(LB) */}
          <div className="flex flex-col">
            <label
              htmlFor="maxWeight"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              Max weight(LB)<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="maxWeight"
              placeholder="100" // Placeholder from screenshot
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
            />
          </div>
        </div>

        {/* Second Row: One time pet fee, Pet Security Deposit, Monthly pet rent */}
        {/* Using a 3-column grid for these */}
        <div className="grid grid-cols-3 gap-6">
          {/* One time pet fee */}
          <div className="flex flex-col">
            <label
              htmlFor="oneTimeFee"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              One time pet fee<span className="text-red-500">*</span>
            </label>
            <input
              type="text" // Using text to allow '$' or numbers, can change to number if only numbers are strictly needed
              id="oneTimeFee"
              placeholder="$100" // Placeholder from screenshot
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={oneTimeFee}
              onChange={(e) => setOneTimeFee(e.target.value)}
            />
          </div>

          {/* Pet Security Deposit */}
          <div className="flex flex-col">
            <label
              htmlFor="securityDeposit"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              Pet Security Deposit<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="securityDeposit"
              placeholder="$100" // Placeholder from screenshot
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={securityDeposit}
              onChange={(e) => setSecurityDeposit(e.target.value)}
            />
          </div>

          {/* Monthly pet rent */}
          <div className="flex flex-col">
            <label
              htmlFor="monthlyRent"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              Monthly pet rent<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="monthlyRent"
              placeholder="$100" // Placeholder from screenshot
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default PetFeesPopup;
