import React from "react";
import { X } from "lucide-react"; // cancel icon
import ReusablePopup from "../popups/PropertyAddressPopup";

const PropertyAddressPopup = ({ isOpen, onClose }) => {
  const handleSave = () => {
    // handle save logic here
    onClose();
  };

  // Labels for each input
  const fields = [
    {
      id: "property_name",
      label: "Property Name*",
      placeholder: "Property name*",
    },
    {
      id: "total_units",
      label: "Total Apartment Unit*",
      placeholder: "Total apartment unit*",
    },
    {
      id: "website",
      label: "Property Website (optional)",
      placeholder: "Property website (optional)",
    },
    { id: "country", label: "Country/Region*", placeholder: "Country/Region*" },
    { id: "street", label: "Street Address*", placeholder: "Street address*" },
    { id: "apt", label: "Apt, Suite, Unit", placeholder: "Apt, suite, unit" },
    { id: "city", label: "City/Town*", placeholder: "City/Town*" },
    { id: "state", label: "State/Territory*", placeholder: "State/Territory*" },
    { id: "zip", label: "Zip Code*", placeholder: "Zip code*" },
  ];

  return (
    <ReusablePopup
      isOpen={isOpen}
      title={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Property Address</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded hover:bg-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      }
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="grid md:grid-cols-3 gap-6">
          {fields.map(({ id, label, placeholder }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="text-sm font-medium mb-1">
                {label}
              </label>
              <input
                id={id}
                type="text"
                placeholder={placeholder}
                className="border p-2 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </ReusablePopup>
  );
};

export default PropertyAddressPopup;
