import React from "react";
import ReusablePopup from "../common/ReusablePopup "; // ✅ Make sure path has NO SPACE

const PropertyAddressPopup = ({ isOpen, onClose }) => {
  const handleSave = () => {
    // handle save logic here
    onClose(); // close after save
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Property Address"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Property name*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Total apartment unit*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Property website (optional)"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Country/Region*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Street address*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Apt, suite, unit"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="City/Town*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="State/Territory*"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Zip code*"
          className="border p-2 rounded"
        />
      </div>
    </ReusablePopup>
  );
};

export default PropertyAddressPopup;
