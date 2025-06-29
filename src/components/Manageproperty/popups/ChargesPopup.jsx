import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ChargesPopup = ({ isOpen, onClose }) => {
  const [applicationFee, setApplicationFee] = useState("");
  const [adminFee, setAdminFee] = useState("");
  const [applicantType, setApplicantType] = useState("All 18+ applicant");

  const handleSave = () => {
    console.log({
      applicationFee,
      applicantType,
      adminFee,
    });
    onClose();
  };

  return (
    <div>
      <ReusablePopup
        isOpen={isOpen}
        title="Charges"
        onClose={onClose}
        onSave={handleSave}
        footerLeft={<p className="flex items-center gap-2"><HiOutlineExclamationCircle size={18}/><span className="font-semibold text-gray-800"> Type 0 if charges are not applicable</span></p>}
      >
        <div className="flex flex-col w-[780px] h-[129px] justify-center px-6 overflow-hidden">
          {/* Fees Inputs */}
          <div className="grid grid-cols-2 gap-6">
            {/* Application Fee */}
            <div className="flex flex-col">
              <label
                htmlFor="applicationFee"
                className="font-medium text-gray-800 text-sm mb-4"
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
                  className="border border-gray-300 border-r-0 rounded-l-lg px-4 h-[48px] w-full text-sm placeholder:text-gray-400"
                  value={applicationFee}
                  onChange={(e) => setApplicationFee(e.target.value)}
                />
                <select
                  id="applicantType"
                  className="border border-gray-300 border-l-0 rounded-r-lg px-2 h-[48px] text-sm font-semibold text-gray-600"
                  value={applicantType}
                  onChange={(e) => setApplicantType(e.target.value)}
                >
                  <option>All 18+ applicant</option>
                  <option>Per applicant</option>
                  <option>Per lease</option>
                </select>
              </div>
            </div>

            {/* Admin Fee */}
            <div className="flex flex-col">
              <label
                htmlFor="adminFee"
                className="font-medium text-gray-800 text-sm mb-4"
              >
                Admin fee (one-time)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="adminFee"
                placeholder="00"
                min="0"
                className="border border-gray-300 rounded-lg px-4 h-[48px] w-full text-sm placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                value={adminFee}
                onChange={(e) => setAdminFee(e.target.value)}
              />
            </div>
          </div>
        </div>
      </ReusablePopup>
    </div>
  );
};

export default ChargesPopup;
