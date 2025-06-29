import React, { useState } from "react";
import toast from "react-hot-toast";

/**
 * A popup component for adding a new payment card.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Controls the visibility of the popup.
 * @param {function} props.onClose - Function to close the popup.
 * @param {function} props.onSave - Function called with card details on save.
 */
const AddNewCardPopup = ({ isOpen, onClose, onSave }) => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");

  const getCardIcon = (number) => {
    if (number.startsWith("4")) return "💳"; // Visa
    if (number.startsWith("5")) return "Ⓜ️"; // Mastercard
    if (number.startsWith("34") || number.startsWith("37")) return "🏦"; // Amex
    return null;
  };
  const cardIcon = getCardIcon(cardNumber);

  const handleSave = () => {
    if (!nameOnCard || !cardNumber || !expireDate || !cvc) {
      toast.error("Please fill out all fields.");
      return;
    }

    onSave({ nameOnCard, cardNumber, expireDate, cvc });
    toast.success("Card added successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-[9999] flex items-center justify-center">
      <div className="bg-white rounded-[18px] shadow-xl w-[780px] max-w-full mx-4">
        {/* Header */}
        <div className="flex justify-between bg-gray-100 items-center p-4 border-b border-gray-200">
          <h2 className="text-[16px] text-gray-600 font-semibold">
            Add new card
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-6">
            {/* Name on Card */}
            <div className="flex flex-col">
              <label
                htmlFor="nameOnCard"
                className="font-medium text-gray-800 mb-2"
              >
                Name on card
              </label>
              <input
                type="text"
                id="nameOnCard"
                placeholder="Alex Jones"
                autoComplete="cc-name"
                className="border border-gray-300 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>

            {/* Card Number */}
            <div className="flex flex-col">
              <label
                htmlFor="cardNumber"
                className="font-medium text-gray-800 mb-2"
              >
                Card number
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  autoComplete="cc-number"
                  className="border border-gray-300 rounded-lg px-4 h-[48px] w-full pr-10 focus:ring-blue-500 focus:border-blue-500"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {cardIcon && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    {cardIcon}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Expiry */}
            <div className="flex flex-col">
              <label
                htmlFor="expireDate"
                className="font-medium text-gray-800 mb-2"
              >
                Expire date
              </label>
              <input
                type="text"
                id="expireDate"
                placeholder="MM/YY"
                autoComplete="cc-exp"
                className="border border-gray-300 rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </div>

            {/* CVC */}
            <div className="flex flex-col">
              <label htmlFor="cvc" className="font-medium text-gray-800 mb-2">
                CVC
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="cvc"
                  placeholder="123"
                  autoComplete="cc-csc"
                  className="border border-gray-300 rounded-lg px-4 h-[48px] w-full pr-10 focus:ring-blue-500 focus:border-blue-500"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
                <img
                  src="/images/card.png"
                  alt="Card help"
                  className="absolute right-5 top-4 cursor-pointer h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCardPopup;
