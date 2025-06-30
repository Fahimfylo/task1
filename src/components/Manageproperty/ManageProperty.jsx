import { useState } from "react";
import PropertyAddressPopup from "./popups/PropertyAddressPopup";
import LeasingInfoPopup from "./popups/LeasingInfoPopup";
import ChargesPopup from "./popups/ChargesPopup";
import RentPopup from "./popups/RentPopup"
import ApplicationPopup from "./popups/ApplicationPopup"
import AboutPropertyPopup from "./popups/AboutPropertyPopup"
import CommunityPopup from "./popups/CommunitiesPopup";
import PetFeesPopup from "./popups/PetFeesPopup";
import ParkingPopup from "./popups/ParkingPopup";
import EducationPopup from "./popups/EducationPopup";
import NearestStationPopup from "./popups/NearestStationPopup";
import NearestLandmarkPopup from "./popups/NearestLandmarkPopup";
import UtilitiesProviderPopup from "./popups/UtilitiesProviderPopup";
import PaymentPopup from "./popups/PaymentPopup";

const ManageProperty = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const closePopup = () => setOpenPopup(null);

  const sections = [
    { key: "propertyAddress", label: "Property Address" },
    { key: "leasingInfo", label: "Leasing Info" },
    { key: "charges", label: "Charges" },
    { key: "rent", label: "rent" },
    { key: "application", label: "application" },
    { key: "property", label: "property" },
    { key: "communities", label: "communities" },
    { key: "petfees", label: "petfees" },
    { key: "parking", label: "parking" },
    { key: "education", label: "education" },
    { key: "station", label: "station" },
    { key: "landmark", label: "landmark" },
    { key: "utilites", label: "utilites" },
    { key: "payment", label: "payment" },
  ];
  const popupComponents = {
    propertyAddress: PropertyAddressPopup,
    leasingInfo: LeasingInfoPopup,
    charges: ChargesPopup,
    rentpopups: RentPopup,
    application: ApplicationPopup,
    property: AboutPropertyPopup,
    communities:   CommunityPopup,
    petfees:   PetFeesPopup,
    parking:   ParkingPopup,
    education: EducationPopup,
    station: NearestStationPopup,
    landmark: NearestLandmarkPopup,
    utilites: UtilitiesProviderPopup,
    payment: PaymentPopup,
  };
  const PopupComponent = openPopup ? popupComponents[openPopup] : null;

  return (
    <div className="space-y-4 p-6">
      {sections.map(({ key, label }) => (
        <div key={key} className="flex justify-between items-center">
          <p className="font-semibold">{label}</p>
          <button
            onClick={() => setOpenPopup(key)}
            className="text-blue-600 font-medium"
          >
            + Add
          </button>
        </div>
      ))}

      {PopupComponent && <PopupComponent isOpen onClose={closePopup} />}
    </div>
  );
};

export default ManageProperty;
