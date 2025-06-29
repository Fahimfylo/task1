import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup"; 
import toast from "react-hot-toast";

const ApplicationAgreementPopup = ({ isOpen, onClose }) => {
  const [agreementFile, setAgreementFile] = useState(null);
  const [acceptImmigrantApplication, setAcceptImmigrantApplication] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAgreementFile(event.target.files[0]);
      console.log("Selected file:", event.target.files[0].name);
    }
  };

  const handleSave = () => {
    toast.success("Saved successfully!", {
    });
    onClose(); 
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Application agreement(optional)" 
      onClose={onClose}
      onSave={handleSave} 
    >
      <div className="flex flex-col justify-center w-[780px] h-[180px] px-6 py-6 space-y-4 overflow-hidden"> {/* Added h-[294px] and overflow-hidden */}
        <div className="flex flex-col">
          <label htmlFor="uploadAgreement" className="font-medium text-gray-800 text-[15px] mb-4">
            Upload agreement
          </label>
          <div
            className="relative bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors duration-200 h-[48px] w-[732px]" // Adjusted w-[748px] to w-[732px] for proper fit within px-6 parent
            onClick={() => document.getElementById('fileUpload').click()} // Trigger hidden input click
          >
            <input
              type="file"
              id="fileUpload"
              className="hidden" 
              onChange={handleFileChange}
              accept=".pdf" 
            />
            <div className="flex flex-row gap-2 items-center">
              <img src="../../../../public/images/upload-02.png" alt="" /> 
              <p className="text-gray-600 font-medium text-sm"> 
                {agreementFile ? agreementFile.name : "(Pdf only)"}
              </p>
            </div>
          </div>
        </div>

        {/* Checkbox for Acceptance */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptImmigrantApplication"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={acceptImmigrantApplication}
            onChange={(e) => setAcceptImmigrantApplication(e.target.checked)}
          />
          <label
            htmlFor="acceptImmigrantApplication"
            className="ml-2 text-gray-700 text-sm font-medium cursor-pointer"
          >
            Accept immigrant & international student application
          </label>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default ApplicationAgreementPopup;