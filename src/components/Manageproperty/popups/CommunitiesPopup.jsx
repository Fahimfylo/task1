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
import { FiSearch } from "react-icons/fi"; // Search icon
import {
  MdOutlineAcUnit, // Air conditioning
  MdOutlineCable, // Cable ready
  // MdOutlineFan, // REMOVE or REPLACE THIS
  MdOutlineHeight,
  MdOutlineBalcony,
  MdOutlineKitchen,
  MdOutlineForest,
  MdOutlineWash,
  MdOutlineBed,
  MdOutlineFireplace,
  MdOutlineMedicalServices,
  MdOutlineSensorDoor,
  MdOutlineLocalFireDepartment,
  MdOutlineDeck,
  MdOutlineLocalParking,
} from "react-icons/md";


const amenityIcons = {
  "Air conditioning": MdOutlineAcUnit,
  "Cable ready": MdOutlineCable,
  "High ceilings": MdOutlineHeight,
  "Private balcony": MdOutlineBalcony,
  Refrigerator: MdOutlineKitchen,
  "Wooded views": MdOutlineForest,
  "W/D hookup": MdOutlineWash,
  "Hardwood Floor (home)": MdOutlineBed,
  "Fireplace (home)": MdOutlineFireplace,
  "First aid kit": MdOutlineMedicalServices,
  "Carbon monoxide alarm": MdOutlineSensorDoor,
  "Expanded patios (home)": MdOutlineDeck,
  "Free parking on premises": MdOutlineLocalParking,
  "Fire extinguisher": MdOutlineLocalFireDepartment,
};

const allAmenities = Object.keys(amenityIcons);

const CommunityPopup = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const filteredAmenities = allAmenities.filter((amenity) =>
    amenity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevSelected) =>
      prevSelected.includes(amenity)
        ? prevSelected.filter((item) => item !== amenity)
        : [...prevSelected, amenity]
    );
  };

  const handleSave = () => {
    console.log("Selected Amenities:", selectedAmenities);
    // Implement your actual save/submission logic here
    onClose(); // Close the popup after saving
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Community's amenity/features" // Title from screenshot
      onClose={onClose}
      onSave={handleSave} // Calls handleSave on "Add" button click
    >
      <div className="flex flex-col w-[780px] px-6 py-6">
        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search amenities"
            className="border text-sm border-gray-300 rounded-lg pl-10 pr-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[300px] pb-4">
          {" "}
          {/* Added max-h and overflow for scrollable area */}
          {filteredAmenities.map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            const isSelected = selectedAmenities.includes(amenity);
            return (
              <button
                key={amenity}
                className={`flex items-center justify-center p-2 border rounded-lg text-sm transition-all duration-200
                          ${
                            isSelected
                              ? "bg-blue-100 border-blue-500 text-blue-800"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          }
                          shadow-sm`}
                onClick={() => toggleAmenity(amenity)}
              >
                {IconComponent && <IconComponent className="mr-2" size={20} />}
                {amenity}
              </button>
            );
          })}
        </div>
      </div>
    </ReusablePopup>
  );
};

export default CommunityPopup;
