import React, { useState } from "react";
import { countries, states } from "../../utils/constants";
import PhoneInputWithCountry from "../../components/common/PhoneInputWithCountry";
import { SlArrowDown } from "react-icons/sl";

const CompanyOfficeForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form className="border border-gray-300 p-6 rounded-lg bg-white mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
      {/* Row 1 */}
      <div>
        <label className="block font-medium mb-1" htmlFor="companyName">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="companyIdentifier">
          Company Identifier
        </label>
        <input
          id="companyIdentifier"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="jobTitle">
          Your Job Title
        </label>
        <input
          id="jobTitle"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="agreementUpload">
          Agreement with Landlord/Owner (PDF)
        </label>
        <input
          id="agreementUpload"
          type="file"
          accept="application/pdf"
          className="w-full"
        />
      </div>

      {/* Row 2 */}
      <div>
        <label className="block font-medium mb-1" htmlFor="country">
          Country/Region
        </label>
        <div className="relative">
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full border text-sm text-gray-700 border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Custom dropdown icon */}
          <SlArrowDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
            size={16}
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="streetAddress">
          Street Address
        </label>
        <input
          id="streetAddress"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="aptUnit">
          Apt / Unit
        </label>
        <input
          id="aptUnit"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <p className="block text-sm font-semibold mb-2">Phone Number</p>
        <PhoneInputWithCountry value={phoneNumber} onChange={setPhoneNumber} />
      </div>

      {/* Row 3 */}
      <div>
        <label className="block font-medium mb-1" htmlFor="contactEmail">
          Contact Email
        </label>
        <input
          id="contactEmail"
          type="email"
          placeholder="email@example.com"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="cityTown">
          City/Town
        </label>
        <input
          id="cityTown"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="stateTerritory">
          State/Territory
        </label>
        <select
          id="stateTerritory"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select state/territory</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1" htmlFor="zipCode">
          Zip Code
        </label>
        <input
          id="zipCode"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </form>
  );
};

export default CompanyOfficeForm;
