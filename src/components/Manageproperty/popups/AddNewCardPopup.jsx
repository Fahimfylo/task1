import { useState } from "react";

const AddNewCardPopup = ({ isOpen, onClose, onSave }) => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");

  const getCardIcon = (number) => {
    if (number.startsWith("4"))
      return (
        <svg
          className="h-5 w-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 000-2-2H4zm12 1.5a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM12.5 10a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V11a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v.5a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <rect x="2" y="14" width="16" height="3" rx="1" ry="1"></rect>
        </svg>
      ); 
    if (number.startsWith("5"))
      return (
        <svg
          className="h-5 w-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 000-2-2H4zm12 1.5a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM12.5 10a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V11a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v.5a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <rect x="2" y="14" width="16" height="3" rx="1" ry="1"></rect>
        </svg>
      ); 
    if (number.startsWith("34") || number.startsWith("37"))
      return (
        <svg
          className="h-5 w-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 000-2-2H4zm12 1.5a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM12.5 10a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V11a.5.5 0 01.5-.5zm0 3a.5.5 0 01.5.5v.5a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <rect x="2" y="14" width="16" height="3" rx="1" ry="1"></rect>
        </svg>
      ); 
    return null;
  };
  const cardIcon = getCardIcon(cardNumber);

  const handleSave = () => {
    if (!nameOnCard || !cardNumber || !expireDate || !cvc) {
      return;
    }
    onSave({ nameOnCard, cardNumber, expireDate, cvc });
    setNameOnCard("");
    setCardNumber("");
    setExpireDate("");
    setCvc("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white w-[780px] rounded-[18px] shadow-xl overflow-hidden">
        <div className="flex bg-gray-100 justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-[15px] text-gray-500 font-semibold">
            Add new card
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-[15px] transition-colors duration-200"
            aria-label="Close popup"
          >
            <svg
              className="h-6 w-6 cursor-pointer text-gray-500" 
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-800 text-[15px] mb-1 block">
                Name on card
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg h-[48px] px-4 text-[15px] font-medium placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                placeholder="Alex Jones"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800 text-[15px] mb-1 block">
                Card number
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg h-[48px] px-4 text-[15px] font-medium placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 pr-10" // Added pr-10 for icon space
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="0000 0000 0000 0000"
                />
                {cardIcon && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {cardIcon} 
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-800 text-[15px] mb-1 block">
                Expire date
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg h-[48px] px-4 text-[15px] font-medium placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-800 text-[15px] mb-1 block">
                CVC
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg h-[48px] px-4 text-[15px] font-medium placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500 pr-10" // Added pr-10 for icon space
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t border-gray-200">
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCardPopup;
