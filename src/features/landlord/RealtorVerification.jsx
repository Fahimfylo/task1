import React from "react";

const RealtorVerification = () => {
  return (
    <div className="w-full border border-gray-300 p-6 rounded-lg  bg-white mx-auto">
      <h3 className="text-xl font-semibold mb-4">Realtor Verification</h3>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="licenseNumber">
            License Number
          </label>
          <input
            id="licenseNumber"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your license number"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="additionalDocs">
            Additional Documents
          </label>
          <input
            id="additionalDocs"
            type="file"
            className="w-full"
            multiple
          />
        </div>

        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Agreement with Landlord</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RealtorVerification;
