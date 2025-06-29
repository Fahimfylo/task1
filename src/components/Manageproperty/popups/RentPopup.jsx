import React, { useState } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const RentPopup = ({ isOpen, onClose }) => {
  const [paymentFrequency, setPaymentFrequency] = useState("Monthly");
  const [reminderDate, setReminderDate] = useState(null);
  const [dueDate, setDueDate] = useState(null); 

  const handleSave = () => {
    console.log({
      paymentFrequency,
      reminderDate,
      dueDate,
    });
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Rent frequency & payment reminder"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col w-[780px] h-[129px] px-6 py-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <div className="flex flex-col relative">
              <label
                htmlFor="paymentFrequency"
                className="font-medium text-gray-800 text-[15px] mb-2"
              >
                Rent payment frequency<span className="text-red-500">*</span>
              </label>

              <div className="relative w-full">
                <select
                  id="paymentFrequency"
                  className="w-full border cursor-pointer text-gray-600 text-[15px] border-gray-300 rounded-lg px-4 h-[48px] pr-10 appearance-none font-semibold focus:ring-blue-500 focus:border-blue-500"
                  value={paymentFrequency}
                  onChange={(e) => setPaymentFrequency(e.target.value)}
                >
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>

                {/* Dropdown icon */}
                <SlArrowDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 pointer-events-none"
                  size={15}
                />
              </div>
            </div>
          </div>

          {/* Reminder Date */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 text-[15px] mb-2">
              Rent Reminder/Statement date
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <DatePicker
                selected={reminderDate}
                onChange={(date) => setReminderDate(date)}
                dateFormat="dd MMMM, yyyy" // Standard dateFormat for full year
                className="border text-sm border-gray-300 text-[15px] placeholder:text-gray-600 placeholder:font-semibold rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholderText="Select a date"
                popperPlacement="bottom-start"
                popperClassName="z-[9999]"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: {
                      boundary: "viewport",
                    },
                  },
                  {
                    name: "offset",
                    options: {
                      offset: [0, 5],
                    },
                  },
                ]}
              />

              <SlCalender
                className="absolute cursor-pointer right-6 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 text-[15px] mb-2">
              Rent due date<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="dd MMMM, yyyy" // Standard dateFormat for full year
                className="border text-[15px] border-gray-300 placeholder:text-gray-600 placeholder:font-semibold rounded-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholderText="Select a date"
                popperPlacement="bottom-start"
                popperClassName="z-[9999]"
                popperModifiers={[
                  {
                    name: "preventOverflow",
                    options: {
                      boundary: "viewport",
                    },
                  },
                  {
                    name: "offset",
                    options: {
                      offset: [0, 5],
                    },
                  },
                ]}
              />
              <SlCalender
                className="absolute cursor-pointer right-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default RentPopup;
