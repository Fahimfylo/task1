import React, { useState } from "react";
import PaymentCardPopup from "./PaymentCardPopup"; // adjust path as needed

const ParentComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSave = (newCard) => {
    setCards([...cards, newCard]); // add card to list or do what you want
    setIsPopupOpen(false); // close popup on save
  };

  return (
    <div>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="px-4 cursor-pointer py-2 bg-green-600 text-white rounded"
      >
        Add New Card
      </button>

      <PaymentCardPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSave={handleSave}
      />

      <div>
        <h3>Saved Cards:</h3>
        <ul>
          {cards.map((card, i) => (
            <li key={i}>
              {card.nameOnCard} - ****{card.cardNumber.slice(-4)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
