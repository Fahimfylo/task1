import { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";

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
    onSaveData({
      petType,
      maxWeight,
      oneTimeFee,
      securityDeposit,
      monthlyRent,
    });
    toast.success("Saved successfully!", {});
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Pet fees"
      onClose={onClose}
      onSave={handleSave}
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
                <option value="">Select</option>
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
              placeholder="100"
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="oneTimeFee"
              className="font-medium text-gray-800 text-[15px] mb-2"
            >
              One time pet fee<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="oneTimeFee"
              placeholder="$100"
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={oneTimeFee}
              onChange={(e) => setOneTimeFee(e.target.value)}
            />
          </div>
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
              placeholder="$100"
              className="border text-[15px] border-gray-300 placeholder:text-gray-600 font-medium rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={securityDeposit}
              onChange={(e) => setSecurityDeposit(e.target.value)}
            />
          </div>
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
              placeholder="$100"
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
