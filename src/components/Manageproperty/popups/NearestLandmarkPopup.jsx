import { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";

const NearestLandmarkPopup = ({ isOpen, onClose, initialData, onSaveData }) => {
  const [landmarkType, setLandmarkType] = useState(
    initialData?.landmarkType || ""
  );
  const [distance, setDistance] = useState(initialData?.distance || "");
  const [distanceUnit, setDistanceUnit] = useState(
    initialData?.distanceUnit || "Mile"
  );
  const [landmarkName, setLandmarkName] = useState(
    initialData?.landmarkName || ""
  );

  const handleSave = () => {
    toast.success("Saved successfully!");
    onSaveData({
      landmarkType,
      landmarkName,
      distance,
      distanceUnit,
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Add landmark"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] px-6 py-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="landmarkType"
              className="font-medium text-gray-800 mb-2"
            >
              Landmark type<span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <select
                id="landmarkType"
                className="border text-[15px] font-medium text-gray-600 border-gray-300 rounded-lg px-4 h-[48px] w-full appearance-none bg-white pr-8 focus:ring-blue-500 focus:border-blue-500"
                value={landmarkType}
                onChange={(e) => setLandmarkType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Museum">Museum</option>
                <option value="Mosque">Mosque</option>
                <option value="Temple">Temple</option>
                <option value="Park">Park</option>
                <option value="Historical Site">Historical Site</option>
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
                className="px-4 text-[15px] placeholder:text-gray-600 font-medium text-gray-600 w-full flex-1 outline-none bg-transparent"
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
            htmlFor="landmarkName"
            className="font-medium text-gray-800 mb-2"
          >
            Landmark name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="landmarkName"
            placeholder="Enter name"
            className="border text-[15px] font-medium border-gray-300 placeholder:text-gray-600 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
            value={landmarkName}
            onChange={(e) => setLandmarkName(e.target.value)}
          />
        </div>
      </div>
    </ReusablePopup>
  );
};

export default NearestLandmarkPopup;
