import { useState } from "react";

const RealtorVerification = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [additionalDocs, setAdditionalDocs] = useState(null);
  const [agreementWithLandlord, setAgreementWithLandlord] = useState(null);

  const handleFileChange = (setter, event) => {
    if (event.target.files && event.target.files[0]) {
      setter(event.target.files[0].name);
      console.log("Selected file:", event.target.files[0].name);
    } else {
      setter(null);
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto shadow-sm border-gray-300 rounded-lg bg-white overflow-hidden">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h3 className="text-[15px] font-semibold text-gray-600">
          Realtor verification
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label
              className="block font-medium text-[16px] text-gray-800 text-sm mb-2"
              htmlFor="licenseNumber"
            >
              License number<span className="text-red-500">*</span>
            </label>
            <input
              id="licenseNumber"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 h-[48px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-700 text-sm"
              placeholder="0000000000"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block font-medium text-gray-800 text-[16px] mb-2"
              htmlFor="additionalDocsUpload"
            >
              Additional documents for realtor
              <span className="text-gray-500">(optional)</span>
            </label>
            <div
              className="relative bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-200 h-[48px] overflow-hidden"
              onClick={() =>
                document.getElementById("additionalDocsUpload").click()
              }
            >
              <input
                id="additionalDocsUpload"
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleFileChange(setAdditionalDocs, e)}
              />
              <div className="flex flex-row gap-2 items-center px-3 whitespace-nowrap overflow-hidden">
                <img
                  src="../../../public/images/upload-02.png"
                  alt=""
                  className="h-5"
                />
                <p className="text-gray-600 font-medium text-sm truncate">
                  {additionalDocs ? additionalDocs : "(Pdf only)"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="block font-medium text-gray-800 text-[16px] mb-2"
              htmlFor="agreementWithLandlordUpload"
            >
              Agreement with landlord<span className="text-red-500">*</span>
            </label>
            <div
              className="relative bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors duration-200 h-[48px] overflow-hidden"
              onClick={() =>
                document.getElementById("agreementWithLandlordUpload").click()
              }
            >
              <input
                id="agreementWithLandlordUpload"
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={(e) => handleFileChange(setAgreementWithLandlord, e)}
              />
              <div className="flex flex-row gap-2 items-center px-3 whitespace-nowrap overflow-hidden">
                <img
                  src="../../../public/images/upload-02.png"
                  alt=""
                  className="h-5"
                />
                <p className="text-gray-600 font-medium text-sm truncate">
                  {agreementWithLandlord ? agreementWithLandlord : "(Pdf only)"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorVerification;
