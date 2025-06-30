import { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { FiSearch } from "react-icons/fi";
import { FaFan } from "react-icons/fa6";
import { GrCar } from "react-icons/gr";
import {
  MdOutlineAcUnit,
  MdOutlineCable,
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
import toast from "react-hot-toast";

const amenityIcons = {
  "Air conditioning": MdOutlineAcUnit,
  "Cable ready": MdOutlineCable,
  "Ceiling fan": FaFan,
  "Private balcony": MdOutlineBalcony,
  Refrigerator: MdOutlineKitchen,
  "Wooded views": MdOutlineForest,
  "W/D hookup": MdOutlineWash,
  "Hardwood Floor (home)": MdOutlineBed,
  "Fireplace (home)": MdOutlineFireplace,
  "First aid kit": MdOutlineMedicalServices,
  "Carbon monoxide alarm": MdOutlineSensorDoor,
  "Expanded patios (home)": MdOutlineDeck,
  "Free parking on premises": GrCar,
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
    toast.success("Saved successfully!", {});
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Community's amenity/features"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col justify-center pt-5 pb-1 px-6">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search amenities"
            className="border text-sm border-gray-300 rounded-full pl-10 pr-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="grid grid-cols-3 h-[370px] gap-3 overflow-y-auto max-h-[300px] pb-4">
          {filteredAmenities.map((amenity) => {
            const IconComponent = amenityIcons[amenity];
            const isSelected = selectedAmenities.includes(amenity);
            return (
              <button
                key={amenity}
                className={`flex items-center justify-center border-2 rounded-xl text-[15px] font-medium transition-all duration-200
                          ${
                            isSelected
                              ? "bg-blue-100 border-blue-500 text-blue-800"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          }
                          `}
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
