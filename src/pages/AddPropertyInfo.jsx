/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddNewCardPopup from "../components/Manageproperty/popups/AddNewCardPopup";
import toast from "react-hot-toast";

const AddPropertyInfo = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly"); // 'Monthly' or 'Annually'
  const [selectedPlan, setSelectedPlan] = useState("Regular"); // 'Regular', 'Platinum', 'Enterprise'
  const [paymentOption, setPaymentOption] = useState("Amex-8565"); // Selected card
  const [autoPayEnabled, setAutoPayEnabled] = useState(true); // For Regular plan
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);

  // Dummy payment options
  const paymentCards = [
    { id: "Amex-8565", name: "Alex Jones (Amex card)", lastFour: "8565" },
    { id: "Visa-1234", name: "Alex Jones (Visa card)", lastFour: "1234" },
    { id: "MC-7890", name: "Alex Jones (Mastercard)", lastFour: "7890" },
  ];

  // Plan details
  const plans = {
    Regular: {
      monthly: 99.99,
      annual: 99.99 * 12 * 0.43, // Placeholder for 57% annual saving
      unitRange: "Price for 1-50 unit",
    },
    Platinum: {
      monthly: 129.99,
      annual: 129.99 * 2 * 0.13, // Placeholder for 57% annual saving
      unitRange: "Price for 1-50 unit",
    },
    Enterprise: {
      monthly: 199.99,
      annual: 199.99 * 12 * 0.43, // Placeholder for 57% annual saving
      unitRange: "Peice for 1-50 unit",
    },
  };

  const currentPlan = plans[selectedPlan];
  const currentPrice =
    billingCycle === "Monthly" ? currentPlan.monthly : currentPlan.annual;
  const totalCharge = currentPrice + 0.0; // Assuming no additional charge for now

  return (
    <div className="pt-8 font-inter">
      {/* Header */}
      <div className="mx-auto w-[1280px] shadow-xs px-4 h-[657px] bg-white rounded-lg">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Choose a plan for after 30-days free trial
        </h1>

        {/* Monthly / Annually Toggle */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-8 w-fit">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              billingCycle === "Monthly"
                ? "bg-white shadow text-gray-800"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              billingCycle === "Annually"
                ? "bg-white shadow text-gray-800"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("Annually")}
          >
            Annually (save 57%)
          </button>
        </div>

        {/* Pricing Plans Grid */}
        <div className="w-full grid md:grid-cols-3 gap-6 mb-8">
          {Object.keys(plans).map((planName) => (
            <div
              key={planName}
              className={`relative w-[400px] h-[221px] p-6 border rounded-xl cursor-pointer transition-all duration-200
                        ${
                          selectedPlan === planName
                            ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                            : "border-gray-300 bg-white hover:border-gray-400"
                        }`}
              onClick={() => setSelectedPlan(planName)}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl border  p-2 rounded-xl border-gray-300 bg-gray-100 font-semibold text-gray-800">
                  {planName}
                </h2>
                {planName === "Regular" && (
                  <span className="flex border border-gray-300 p-2 rounded-md items-center text-blue-600 text-sm font-medium">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer mr-2"
                      checked={autoPayEnabled}
                      onChange={(e) => setAutoPayEnabled(e.target.checked)}
                      onClick={(e) => e.stopPropagation()} // Prevent plan selection when clicking checkbox
                    />
                    Auto pay
                  </span>
                )}
              </div>
              <p className="text-4xl mt-8 font-bold text-gray-900 mb-2">
                $
                {billingCycle === "Monthly"
                  ? plans[planName].monthly
                  : plans[planName].annual}
                <span className="text-base font-normal text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-500 font-medium pt-3 text-[15px]">
                {plans[planName].unitRange}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Option */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Payment option
            </h2>
            {/* Trigger this button for popup */}
            <button
              className="text-blue-600 text-sm font-medium hover:underline"
              onClick={() => setIsAddCardPopupOpen(true)}
            >
              Add new card
            </button>
          </div>
          <div className="space-y-[0.5px]">
            {paymentCards.map((card) => (
              <div
                key={card.id}
                className={`flex items-center border border-b-0 border-x-0 border-gray-100 justify-between p-4 cursor-pointer transition-colors duration-200
                          ${paymentOption === card.id ? "" : ""}`}
                onClick={() => setPaymentOption(card.id)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="paymentCard"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    checked={paymentOption === card.id}
                    onChange={() => setPaymentOption(card.id)}
                  />
                  <span className="ml-3 text-gray-800 font-medium">
                    {card.name} ******{card.lastFour}
                  </span>
                </div>
                <button
                  className="px-4 py-2 bg-white border-2 font-semibold border-blue-500 text-blue-500 rounded-xl text-[15px] hover:bg-blue-500 hover:text-white transition"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent div click
                    setPaymentOption(card.id);
                    toast.success(`${card.name} selected successfully!`);
                  }}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
          <AddNewCardPopup
            isOpen={isAddCardPopupOpen}
            onClose={() => setIsAddCardPopupOpen(false)}
            onSave={(newCard) => {
              // Example: Add the new card to your paymentCards state
              toast.success("New card added!");
              setIsAddCardPopupOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPropertyInfo;
