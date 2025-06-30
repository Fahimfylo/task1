import { useState, useRef, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const countries = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const PhoneInputWithCountry = ({
  value,
  onChange,
  className = "",
  inputId,
}) => {
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

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative flex items-center border border-gray-300 rounded-[15px] focus-within:ring-2 focus-within:ring-blue-500 ${className} h-[48px]`}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        aria-label="Select country"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-4 bg-white border-r border-gray-300 rounded-l-[14px] rounded-r-none cursor-pointer select-none min-w-[4.5rem] h-full"
      >
        <span className="text-lg">{selectedCountry.flag}</span>
        <SlArrowDown
          className={`text-gray-600 transition-transform ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          size={12}
        />
      </button>
      <span className="absolute left-[5.2rem] text-sm text-gray-500 pointer-events-none">
        {selectedCountry.code}
      </span>
      <input
        id={inputId}
        type="tel"
        className="flex-grow h-full pl-[6.5rem] pr-4 text-sm font-semibold focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {dropdownOpen && (
        <ul
          role="listbox"
          aria-label="Select country"
          className="absolute z-50 top-full left-0 mt-2 max-h-60 w-64 overflow-auto rounded-[15px] border border-gray-300 bg-white shadow-lg"
        >
          {countries.map((country) => (
            <li
              key={country.code + country.country}
              role="option"
              tabIndex={0}
              aria-selected={selectedCountry.country === country.country}
              onClick={() => handleSelectCountry(country)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectCountry(country);
                }
              }}
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
    </div>
  );
};

export default PhoneInputWithCountry;
