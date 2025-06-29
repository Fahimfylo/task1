import React from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";

const PropertyAddressPopup = ({ isOpen, onClose }) => {
  const handleSave = () => {
    toast.success("Saved successfully!", {});
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Property address"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="h-[323px] w-[780px] flex flex-col rounded-md p-6">
        <div className="grid md:grid-cols-3 flex-1 overflow-y-auto">
          <div className="flex flex-col h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1">
              Property name as identifier<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Dallas apartments complex"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>

          {/* Field: Total apartment unit */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Total apartment unit<span className="text-red-500">*</span>
            </p>
            <input
              type="number"
              placeholder="00"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>

          {/* Field: Property website */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Property website <span className="text-gray-700">(optional)</span>
            </p>
            <input
              type="text"
              placeholder="https//:"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>

          {/* Field: Country/Region */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Country/Region<span className="text-red-500">*</span>
            </p>
            <div className="relative mt-2 w-[230px]">
              <select
                defaultValue=""
                className="w-full border cursor-pointer text-gray-600 text-[15px] border-gray-300 rounded-lg px-4 h-[48px] pr-10 appearance-none font-semibold focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Choose country
                </option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Other">Other</option>
              </select>

              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Field: Street address */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Street address<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="123 Main St"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>

          {/* Field: Apt/suite/unit */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Apt, suite, unit{" "}
              <span className="text-gray-700">(if applicable)</span>
            </p>
            <input
              type="number"
              placeholder="123"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>

          {/* Field: City/Town */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              City/Town<span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Dallas"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>
          {/* Field: State/Territory */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              State/Territory<span className="text-red-500">*</span>
            </p>
            <div className="relative mt-2 w-[230px]">
              <select
                defaultValue=""
                className="appearance-none text-[15px] border text-sm border-gray-300 text-gray-600 rounded-[15px] px-4 h-[48px] w-full font-semibold pr-10 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Choose state
                </option>
                <option value="Texas">Texas</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Illinois">Illinois</option>
                <option value="Other">Other</option>
              </select>

              <SlArrowDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
                size={16}
              />
            </div>
          </div>

          {/* Field: Zip Code */}
          <div className="flex flex-col w-[238px] h-[81px] justify-center">
            <p className="font-medium text-gray-800 text-[15px] mb-1 text-sm">
              Zip Code<span className="text-red-500">*</span>
            </p>
            <input
              type="number"
              placeholder="00000"
              className="border text-[15px] border-gray-300 rounded-[15px] font-medium placeholder:text-gray-600  px-3 h-[48px] w-[230px] pr-5 mt-2"
            />
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default PropertyAddressPopup;
