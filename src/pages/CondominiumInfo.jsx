import React, { useState } from "react";
import { Plus, Upload } from "lucide-react";
import { IoIosArrowDropdown } from "react-icons/io";
import PropertyAddressPopup from "../components/popups/PropertyAddressPopup";

const CondoInformationForm = () => {
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  const formFields = [
    { label: "Property address", note: "(Required)", key: "property_address" },
    { label: "Pet fees", note: "(Optional, add fees if you allow pet)" },
    { label: "Leasing info", note: "(Required)" },
    { label: "Parking", note: "(Optional)" },
    { label: "Charges", note: "(Required)" },
    {
      label: "Nearest educational institution",
      note: "(Optional but recommended)",
    },
    { label: "Rent frequency & payment reminder", note: "(Required)" },
    { label: "Nearest Stations", note: "(Optional but recommended)" },
    { label: "Application agreements", note: "(Optional)" },
    { label: "Nearest landmark", note: "(Optional but recommended)" },
    { label: "About the property", note: "(Optional)" },
    { label: "Utilities provider", note: "(Optional but recommended)" },
    {
      label: "Community amenity / features",
      note: "(Optional but recommended)",
    },
  ];

  const handleAddClick = (label) => {
    if (label === "Property address") {
      setShowAddressPopup(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <h1 className="py-[10px] text-[19px] font-semibold">
        Condominiums information
      </h1>

      {/* Form Fields */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
        {formFields.map((field, idx) => (
          <div
            key={idx}
            className="w-full border border-gray-300 rounded-[20px] flex items-center justify-between"
          >
            <label className="block h-[66px] px-5 py-3 lg:py-5 md:py-4 sm:py-5 font-medium text-gray-700">
              {field.label}{" "}
              <span
                className={`text-sm ${
                  field.note.includes("Required")
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
              >
                {field.note}
              </span>
            </label>

            <button
              onClick={() => handleAddClick(field.label)}
              className="text-blue-600 flex items-center px-5 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-1 text-blue-500" />
              <span className="underline cursor-pointer text-[13px]">Add</span>
            </button>
          </div>
        ))}
      </div>

      {/* Property Gallery Section */}
      <div className="border border-gray-300 rounded-[14px]">
        <h2 className="pt-6 pl-5 text-gray-700 pb-3 font-semibold">
          Property Gallery{" "}
          <span className="text-gray-500">(It's not unit photo)*</span>
        </h2>
        <div className="p-5 border-t border-gray-300">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Featured Photos */}
            <div className="w-full md:w-[439px] h-auto space-y-2">
              <h3 className="font-medium text-gray-700">
                Featured Photos <span className="text-orange-500">*</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="w-full sm:w-[217px] h-[165px] border-2 border-dashed border-blue-500 rounded-xl flex flex-col items-center justify-center text-gray-500 text-sm cursor-pointer gap-2">
                  <Upload className="w-8 h-8 text-black border-2 border-dashed border-blue-500 rounded-md p-1" />
                  Upload cover photo
                </div>
                <div className="grid grid-cols-2 sm:justify-between gap-x-2 gap-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[101px] h-[75px] border-2 border-dashed border-blue-500 rounded-xl flex items-center justify-center cursor-pointer"
                    >
                      <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-500 rounded-md p-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* More Photos */}
            <div className="w-full md:w-[434px] h-auto space-y-2">
              <h3 className="font-medium text-gray-700">
                More Photos <span className="text-gray-500">(optional)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[101px] h-[75px] border-2 border-dashed border-blue-500 rounded-xl flex items-center justify-center cursor-pointer"
                  >
                    <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-500 rounded-md p-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="w-full flex justify-between items-center border border-gray-300 rounded-[20px] h-[66px]">
        <h3 className="px-5 font-medium text-gray-700">
          Videos <span className="text-gray-500">(optional)</span>
        </h3>
        <span className="px-5">
          <IoIosArrowDropdown size={25} />
        </span>
      </div>

      {/* Property Address Popup */}
      <PropertyAddressPopup
        isOpen={showAddressPopup}
        onClose={() => setShowAddressPopup(false)}
      />
    </div>
  );
};

export default CondoInformationForm;
