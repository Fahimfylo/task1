import React, { useState, useRef, useEffect } from "react";

const countries = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const PhoneInputWithCountry = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onKeyDownOption = (e, country) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedCountry(country);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="max-w-md relative" ref={dropdownRef}>
      <label className="block text-sm font-semibold mb-2">Phone Number</label>
      <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-center px-2 bg-white border-r border-gray-300 cursor-pointer select-none min-w-[3.5rem]"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Select country code"
        >
          <span className="text-lg">{selectedCountry.flag}</span>
          <svg
            className={`ml-1 h-3 w-3 text-gray-600 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <ul
            role="listbox"
            aria-label="Select country"
            className="absolute z-50 mt-12 max-h-60 w-64 overflow-auto rounded-md border border-gray-300 bg-white shadow-lg"
          >
            {countries.map((country) => (
              <li
                key={country.code + country.country}
                role="option"
                tabIndex={0}
                aria-selected={selectedCountry.country === country.country}
                onClick={() => {
                  setSelectedCountry(country);
                  setDropdownOpen(false);
                }}
                onKeyDown={(e) => onKeyDownOption(e, country)}
                className={`flex items-center space-x-3 px-4 py-2 cursor-pointer select-none hover:bg-blue-100 ${
                  selectedCountry.country === country.country
                    ? "bg-blue-100 font-semibold"
                    : ""
                }`}
              >
                <span className="text-xl">{country.flag}</span>
                <span>{country.country}</span>
                <span className="ml-auto text-gray-600">{country.code}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center px-2  text-gray-700 select-none min-w-[3.5rem] justify-center">
          {selectedCountry.code}
        </div>

        <input
          type="tel"
          className="flex-grow px-3 py-2 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInputWithCountry;
