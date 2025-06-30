import { useState } from "react";
import { countries, states } from "../../utils/constants";
import PhoneInputWithCountry from "../../components/common/PhoneInputWithCountry";
import { SlArrowDown } from "react-icons/sl";

const CompanyOfficeForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col w-full max-w-[1280px] bg-white rounded-lg shadow-sm overflow-hidden mx-auto">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h3 className="text-[15px] font-semibold text-gray-600">
          Company & Office info
        </h3>
      </div>
      <form className="p-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label
            className="block text-[16px] font-medium mb-1"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            id="CompanyName"
            placeholder="Company name"
            type="text"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            className="block text-[16px] font-medium mb-1"
            htmlFor="CompanyIdentifier"
          >
            Company Identifier
          </label>
          <input
            id="companyIdentifier"
            placeholder="Name"
            type="text"
            className="w-full h-[48px] placeholder:text-gray-600 text-[15px] font-medium border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            className="block text-[16px] font-medium mb-1"
            htmlFor="jobTitle"
          >
            Your Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="Manager"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            className="block text-[16px] font-medium mb-1"
            htmlFor="agreementUpload"
          >
            Agreement with Landlord/Owner (PDF)
          </label>
          <div
            className="bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-colors duration-200 h-[48px] overflow-hidden"
            onClick={() =>
              document.getElementById("additionalDocsUpload").click()
            }
          >
            <input
              id="additionalDocsUpload"
              type="file"
              className="hidden"
              accept=".pdf"
            />
            <div className="flex flex-row gap-2 items-center px-3 whitespace-nowrap overflow-hidden">
              <img
                src="../../../public/images/upload-02.png"
                alt=""
                className="h-5"
              />
              <p className="text-gray-600 font-medium text-sm truncate">
                (Pdf only)
              </p>
            </div>
          </div>
        </div>
        <div>
          <label
            className="block text-[16px] font-medium mb-1"
            htmlFor="country"
          >
            Country/Region
          </label>
          <div className="relative">
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium text-gray-700 border-gray-300 rounded-xl px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
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
            placeholder="Street address"
            type="text"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="aptUnit">
            Apt / Unit
          </label>
          <input
            id="aptUnit"
            type="text"
            placeholder="0000"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <p className="block text-sm font-semibold mb-2">Phone Number</p>
          <PhoneInputWithCountry
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="contactEmail">
            Contact Email
          </label>
          <input
            id="contactEmail"
            type="email"
            placeholder="email@example.com"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="cityTown">
            City/Town
          </label>
          <input
            id="cityTown"
            placeholder="City/Town"
            type="text"
            className="w-full h-[48px] placeholder:text-gray-600 text-[15px] font-medium border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full text-gray-600 border h-[48px] text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            placeholder="00000"
            className="w-full border h-[48px] placeholder:text-gray-600 text-[15px] font-medium border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyOfficeForm;
