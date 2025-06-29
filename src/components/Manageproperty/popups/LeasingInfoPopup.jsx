import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import PhoneInputWithCountry from "../../../components/common/PhoneInputWithCountry"; // Adjust path if needed

const LeasingInfoPopup = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [sameAddress, setSameAddress] = useState(false);

  const handleSave = () => {
    console.log({
      managerName,
      phone,
      managerEmail,
      sameAddress,
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Leasing info"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex w-[780px] h-[226px] justify-center flex-col px-6">
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col">
            <label
              htmlFor="managerName"
              className="font-medium text-[15px] text-gray-800 mb-2"
            >
              Leasing Manager Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="managerName"
              placeholder="Enter manager name"
              className="border rounded-[15px] border-gray-300 text-[15px] font-medium placeholder:text-gray-600 px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneInput"
              className="font-medium text-[15px] text-gray-700 mb-2"
            >
              Leasing Manager Phone Number
              <span className="text-red-500">*</span>
            </label>
            <PhoneInputWithCountry
              value={phone}
              onChange={setPhone}
              inputId="phoneInput"
              className="w-[336px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-end">
          <div className="flex flex-col">
            <label
              htmlFor="managerEmail"
              className="font-medium text-[15px] text-gray-800 mb-2"
            >
              Leasing Manager Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="managerEmail"
              placeholder="leasing@rentyard.com"
              className="border rounded-[15px] border-gray-300 text-[15px] font-medium placeholder:text-gray-600 px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
              value={managerEmail}
              onChange={(e) => setManagerEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center pb-4">
            <input
              type="checkbox"
              id="sameAddress"
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={sameAddress}
              onChange={(e) => setSameAddress(e.target.checked)}
            />
            <label
              htmlFor="sameAddress"
              className="ml-2 text-gray-700 text-sm font-medium cursor-pointer"
            >
              Address (same as property)
            </label>
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default LeasingInfoPopup;
