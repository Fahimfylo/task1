import { useState, useEffect } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";

const UtilitiesProviderPopup = ({
  isOpen,
  onClose,
  initialData,
  onSaveData,
}) => {
  const [type, setType] = useState(initialData?.type || "");
  const [name, setName] = useState(initialData?.name || "");
  useEffect(() => {
    setType(initialData?.type || "");
    setName(initialData?.name || "");
  }, [initialData]);

  const handleSave = () => {
    onSaveData({ type, name });
    toast.success("Saved successfully!");
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Utilities provider"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] px-6 py-6 space-y-4">
        <div className="grid grid-cols-2 gap-6">
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
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select</option>
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
          <div className="flex flex-col">
            <label
              htmlFor="providerName"
              className="font-medium text-gray-800 mb-2"
            >
              Provider company name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="providerName"
              placeholder="Enter name"
              className="border text-[15px] font-medium border-gray-300 placeholder:text-gray-600 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default UtilitiesProviderPopup;
