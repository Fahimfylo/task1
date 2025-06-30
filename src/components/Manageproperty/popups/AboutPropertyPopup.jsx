import { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import toast from "react-hot-toast";

const AboutPropertyPopup = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  const handleSave = () => {
    toast.success("Saved successfully!", {});
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="About the property(optional)"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] h-[212px] px-6 py-6">
        <div className="flex flex-col mb-6">
          <textarea
            id="propertyMessage"
            placeholder="Type message here"
            className="border text-[15px] border-gray-300 font-medium placeholder:text-gray-600 rounded-lg p-4 h-[164px] w-full focus:ring-blue-500 focus:border-blue-500 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
        </div>
      </div>
    </ReusablePopup>
  );
};

export default AboutPropertyPopup;
