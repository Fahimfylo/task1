import React, { useState } from "react";
// IMPORTANT: You MUST adjust the import path below to match your actual project structure.
// The "Could not resolve" error means this path is currently incorrect for your setup.
import ReusablePopup from "../../../components/common/ReusablePopup"; // Common path from your previous code

// IMPORTANT: react-icons is an external library.
// If you are running this code in your own environment,
// you need to install it via npm or yarn:
// npm install react-icons
// or
// yarn add react-icons
import { SlArrowDown } from "react-icons/sl"; // Import SlArrowDown icon

const UtilitiesProviderPopup = ({
  isOpen,
  onClose,
  initialData,
  onSaveData,
}) => {
  const [utilityType, setUtilityType] = useState(
    initialData?.utilityType || ""
  ); // Default from screenshot (Select)
  const [providerCompanyName, setProviderCompanyName] = useState(
    initialData?.providerCompanyName || ""
  );

  const handleSave = () => {
    console.log({
      utilityType,
      providerCompanyName,
    });
    // Implement your actual save/submission logic here
    onSaveData({
      utilityType,
      providerCompanyName,
    });
    onClose(); // Close the popup after saving
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Utilities provider" // Title from screenshot
      onClose={onClose}
      onSave={handleSave} // Calls handleSave on "Add" button click
    >
      {/* Overall popup content size: w-780, h-auto to fit content */}
      <div className="flex flex-col w-[780px] px-6 py-6 space-y-4">
        {/* First Row: Utility type & Provider company name */}
        <div className="grid grid-cols-2 gap-6">
          {/* Utility type */}
          <div className="flex flex-col">
            <label
              htmlFor="utilityType"
              className="font-medium text-gray-800 mb-2"
            >
              Utility type<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                id="utilityType"
                className="border text-[15px] font-medium text-gray-600 border-gray-300 rounded-lg px-4 h-[48px] w-full appearance-none bg-white pr-8 focus:ring-blue-500 focus:border-blue-500"
                value={utilityType}
                onChange={(e) => setUtilityType(e.target.value)}
              >
                <option value="">Select</option> {/* Placeholder "Select" */}
                <option value="Internet">Internet</option>
                <option value="Cable">Cable</option>
                <option value="Electricity">Electricity</option>
                <option value="Gas">Gas</option>
                <option value="Water">Water</option>
              </select>
              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Provider company name */}
          <div className="flex flex-col">
            <label
              htmlFor="providerCompanyName"
              className="font-medium text-gray-800 mb-2"
            >
              Provider company name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="providerCompanyName"
              placeholder="Enter name" // Placeholder from screenshot
              className="border text-[15px] font-medium border-gray-300 placeholder:text-gray-600 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={providerCompanyName}
              onChange={(e) => setProviderCompanyName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default UtilitiesProviderPopup;
