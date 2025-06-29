import React, { useState } from "react";
// IMPORTANT: Please adjust the path to ReusablePopup based on its actual location in your project.
// If you encounter "Could not resolve" errors, carefully check your file structure.
import ReusablePopup from "../../../components/common/ReusablePopup"; // Common path from your previous code

// IMPORTANT: react-icons is an external library.
// If you are running this code in your own environment,
// you need to install it via npm or yarn:
// npm install react-icons
// or
// yarn add react-icons
import { SlArrowDown } from "react-icons/sl"; // Import SlArrowDown icon
import { HiOutlineExclamationCircle } from "react-icons/hi"; // For the exclamation icon in the footer
import toast from "react-hot-toast";

const ChargesPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [applicationFee, setApplicationFee] = useState(
    initialData?.applicationFee || ""
  );
  const [adminFee, setAdminFee] = useState(initialData?.adminFee || "");
  const [applicantType, setApplicantType] = useState(
    initialData?.applicantType || "All 18+ applicant"
  );

  const handleSave = () => {
    onSaveData({
      applicationFee,
      applicantType,
      adminFee,
    });
    toast.success("Saved successfully!", {
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Charges"
      onClose={onClose}
      onSave={handleSave}
      footerLeft={
        <p className="flex items-center gap-2">
          <HiOutlineExclamationCircle size={18} />
          <span className="font-semibold text-gray-800">
            Type 0 if charges are not applicable
          </span>
        </p>
      }
    >
      <div className="flex flex-col w-[780px] h-[129px] justify-center px-6 overflow-hidden">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="applicationFee"
              className="font-medium text-gray-800 text-[15px] mb-4" // Adjusted mb-2 to mb-4 based on provided code
            >
              Application fee (one-time)
              <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <input
                type="number"
                id="applicationFee"
                placeholder="100"
                min="0"
                className="border border-gray-300 border-r-0 rounded-l-lg px-4 h-[48px] w-full placeholder:text-gray-600 placeholder:font-medium focus:ring-blue-500 focus:border-blue-500" // Adjusted border-r-0 and placeholder color
                value={applicationFee}
                onChange={(e) => setApplicationFee(e.target.value)}
              />
              <div className="relative">
                <select
                  id="applicantType"
                  className="border text-[15px] border-gray-300 w-40 border-l-0 rounded-r-lg px-2 h-[48px] text-sm font-semibold text-gray-600 appearance-none bg-white pr-8 focus:ring-blue-500 focus:border-blue-500" // Adjusted border-l-0 to border and rounded-r-lg
                  value={applicantType}
                  onChange={(e) => setApplicantType(e.target.value)}
                >
                  <option>All 18+ applicant</option>
                  <option>Per applicant</option>
                  <option>Per lease</option>
                </select>
                <SlArrowDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>

          {/* Admin Fee */}
          <div className="flex flex-col">
            <label
              htmlFor="adminFee"
              className="font-medium text-gray-800 text-[15px] mb-4" // Adjusted mb-2 to mb-4 based on provided code
            >
              Admin fee (one-time)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="adminFee"
              placeholder="00"
              min="0"
              className="border border-gray-300 rounded-lg px-4 h-[48px] w-full text-[15px] placeholder:text-gray-600 placeholder:font-medium focus:ring-blue-500 focus:border-blue-500" // Adjusted placeholder color
              value={adminFee}
              onChange={(e) => setAdminFee(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default ChargesPopup;
