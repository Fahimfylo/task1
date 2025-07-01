/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Upload } from "lucide-react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ReusablePopup = ({
  isOpen,
  title,
  onClose,
  onSave,
  children,
  footerLeft,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-[9000]">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
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
        <div className="p-4">{children}</div>
        <div className="flex justify-between items-center p-4 border-t">
          <div>{footerLeft}</div>
          <button
            onClick={onSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
const PhoneInputWithCountry = ({ value, onChange, inputId, className }) => {
  const [countryCode, setCountryCode] = useState("+880");
  const [phoneNumber, setPhoneNumber] = useState(
    value?.replace(/^\+\d+/, "") || ""
  );

  useEffect(() => {
    setPhoneNumber(value?.replace(/^\+\d+/, "") || "");
    if (value && value.startsWith("+")) {
      const potentialCode = value.match(/^\+(\d+)/)?.[0];
      if (potentialCode) {
        if (["+1", "+880"].includes(potentialCode)) {
          setCountryCode(potentialCode);
        }
      }
    }
  }, [value]);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    onChange(`${countryCode}${e.target.value}`);
  };

  return (
    <div className={`flex w-full ${className}`}>
      <select
        className="border text-sm border-gray-300 rounded-l-lg px-2 h-[48px] focus:ring-blue-500 focus:border-blue-500 font-semibold"
        value={countryCode}
        onChange={(e) => {
          setCountryCode(e.target.value);
          onChange(`${e.target.value}${phoneNumber}`);
        }}
      >
        <option value="+880">🇧🇩 +880</option>
        <option value="+1">🇺🇸 +1</option>
      </select>
      <input
        type="tel"
        id={inputId}
        className="border text-sm border-gray-300 rounded-r-lg px-4 h-[48px] w-full focus:ring-blue-500 focus:border-blue-500"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Phone Number"
      />
    </div>
  );
};
import PropertyAddressPopup from "../components/Manageproperty/popups/PropertyAddressPopup";
import LeasingInfoPopup from "../components/Manageproperty/popups/LeasingInfoPopup";
import ChargesPopup from "../components/Manageproperty/popups/ChargesPopup";
import RentPopup from "../components/Manageproperty/popups/RentPopup";
import ApplicationPopup from "../components/Manageproperty/popups/ApplicationPopup"; // Assuming this is correct
import AboutPropertyPopup from "../components/Manageproperty/popups/AboutPropertyPopup";
import CommunityPopup from "../components/Manageproperty/popups/CommunitiesPopup"; // Make sure the filename matches CommunityPopup.jsx
import PetFeesPopup from "../components/Manageproperty/popups/PetFeesPopup";
import ParkingPopup from "../components/Manageproperty/popups/ParkingPopup";
import EducationPopup from "../components/Manageproperty/popups/EducationPopup";
import NearestStationPopup from "../components/Manageproperty/popups/NearestStationPopup";
import NearestLandmarkPopup from "../components/Manageproperty/popups/NearestLandmarkPopup";
import UtilitiesProviderPopup from "../components/Manageproperty/popups/UtilitiesProviderPopup";
import toast from "react-hot-toast";
import ApplicationAgreementPopup from "../components/Manageproperty/popups/ApplicationPopup";

const CondoSummary = () => {
  const [condoData, setCondoData] = useState({
    propertyAddress: {
      propertyName: "Dallas apartments complex",
      totalUnits: "80",
      propertyWebsite: "https://rentyard.com",
      country: "USA",
      streetAddress: "1203 Eates Rd",
      aptSuiteUnit: "79077",
      city: "Dallas",
      state: "TX",
      zipCode: "79077",
    },
    leasingInfo: {
      managerName: "Alex Johan",
      phone: "+8801700000000",
      managerEmail: "leasing@rentyeard.com",
      sameAddress: true,
    },
    charges: {
      applicationFee: "100",
      applicantType: "All 18+ applicant",
      adminFee: "15",
    },
    rentReminder: {
      paymentFrequency: "Monthly",
      reminderDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),
    },
    applicationAgreement: {
      agreementFileName: null,
      acceptImmigrantApplication:
        "Accept immigrant & international student application",
    },
    aboutProperty: {
      message:
        "A well-maintained property offering modern amenities, spacious living, and located in a prime neighborhood ideal for families and professionals.",
    },
    communityAmenities: {
      selectedAmenities: [
        "Air conditioning",
        "Cable ready",
        "Ceiling fan",
        "High ceilings",
        "Private balcony",
        "Refrigerator",
        "Wooded views",
      ],
    },
    petFees: {
      petType: "Dog",
      maxWeight: "20",
      oneTimeFee: "100",
      securityDeposit: "100",
      monthlyRent: "100",
    },
    parking: {
      parkingTime: "2H",
      parkingOverview: "Secure on-site parking available for up to 2 hours",
    },
    nearestEducationalInstitution: [
      {
        institutionType: "Elementary School",
        institutionName: "Greenwood Elementary",
        distance: "1.2",
        distanceUnit: "miles",
      },
    ],
    nearestStations: [
      {
        stationType: "Bus",
        stationName: "Central Bus Stop",
        distance: "2",
        distanceUnit: "mile",
      },
    ],
    nearestLandmark: [
      {
        landmarkType: "Museums",
        landmarkName: "National History Museum",
        distance: "2",
        distanceUnit: "mile",
      },
    ],
    utilitiesProvider: [
      {
        type: "Internet",
        name: "Comcast Xfinity",
      },
    ],
  });

  const [openPopup, setOpenPopup] = useState(null);
  const [showVideosSection, setShowVideosSection] = useState(false);
  const [propertyVideoFile, setPropertyVideoFile] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  const [morePhotos, setMorePhotos] = useState(Array(12).fill(null));
  const [coverPhoto, setCoverPhoto] = useState(null);
  const handleOpenPopup = (popupName) => {
    setOpenPopup(popupName);
  };
  const handleClosePopup = () => {
    setOpenPopup(null);
  };
  const handleSaveSectionData = (sectionName, data) => {
    setCondoData((prevData) => ({
      ...prevData,
      [sectionName]: data,
    }));
  };

  const renderDataItem = (
    label,
    data,
    sectionName,
    displayFunc,
    isOptional = false
  ) => (
    <div className="flex items-start justify-between py-2 border-b last:border-b-0">
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{label}</span>
        {data ? (
          <span className="text-gray-600 text-sm">{displayFunc(data)}</span>
        ) : (
          <span className="text-gray-500 text-sm italic">Not set</span>
        )}
      </div>
      <button
        className="ml-4 px-3 py-1 text-sm rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700"
        onClick={() => handleOpenPopup(sectionName)}
      >
        {data ? "Edit" : "Add"}
      </button>
    </div>
  );
  const handleVideoFileChange = (setter, event) => {
    if (event.target.files && event.target.files[0]) {
      setter(event.target.files[0].name); 
      console.log("Selected video file:", event.target.files[0].name);
    } else {
      setter(null); 
    }
  };
  const handleCoverPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverPhotoFile(event.target.files[0].name);
    } else {
      setCoverPhotoFile(null);
    }
  };
  const handleMorePhotoChange = (index, event) => {
    if (event.target.files && event.target.files[0]) {
      const newMorePhotos = [...morePhotos];
      newMorePhotos[index] = event.target.files[0].name;
      setMorePhotos(newMorePhotos);
    } else {
      const newMorePhotos = [...morePhotos];
      newMorePhotos[index] = null;
      setMorePhotos(newMorePhotos);
    }
  };
  const handleAmenityRemove = (indexToRemove) => {
    const updated = [...condoData.communityAmenities.selectedAmenities];
    updated.splice(indexToRemove, 1);
    setCondoData((prev) => ({
      ...prev,
      communityAmenities: {
        ...prev.communityAmenities,
        selectedAmenities: updated,
      },
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] w-full mx-auto bg-white rounded-lg">
        <h1 className="py-[10px] text-[19px] font-semibold text-gray-800 mb-4 mt-1 pb-4">
          Condominiums Information
        </h1>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex flex-col w-full xl:w-[50%]">
            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Property address
                  <span className="text-red-500 text-sm ml-1">(Required)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("propertyAddress")}
                >
                  {condoData.propertyAddress ? (
                    <>
                      <FaRegEdit className="text-base" size={18} />
                      <span className="underline text-[16px]">Edit</span>
                    </>
                  ) : (
                    <>
                      <IoAdd className="text-base" />
                      Add
                    </>
                  )}
                </button>
              </h2>
              <div className="pt-15">
                {" "}
                {condoData.propertyAddress ? (
                  <>
                    <p className="text-gray-800 text-[15px] font-medium">
                      {condoData.propertyAddress.propertyName}
                      {condoData.propertyAddress.propertyWebsite &&
                        `, ${condoData.propertyAddress.propertyWebsite}`}
                      {condoData.propertyAddress.totalUnits &&
                        `, Total unit: ${condoData.propertyAddress.totalUnits}`}
                    </p>
                    <p className="text-gray-800 text-[15px] font-medium">
                      {condoData.propertyAddress.streetAddress}
                      {condoData.propertyAddress.aptSuiteUnit &&
                        `, Apt/Suite: ${condoData.propertyAddress.aptSuiteUnit}`}
                      {`, ${condoData.propertyAddress.city}, ${condoData.propertyAddress.state} ${condoData.propertyAddress.zipCode}, ${condoData.propertyAddress.country}`}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Leasing info
                  <span className="text-red-500 text-sm ml-1">(Required)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("leasingInfo")}
                >
                  {condoData.leasingInfo ? (
                    <>
                      <FaRegEdit className="text-base" size={18} />
                      <span className="underline text-[16px]">Edit</span>
                    </>
                  ) : (
                    <>
                      <IoAdd className="text-base" />
                      Add
                    </>
                  )}
                </button>
              </h2>

              <div className="pt-15">
                {condoData.leasingInfo ? (
                  <>
                    <p className="text-gray-800 text-[15px] font-medium">
                      {condoData.leasingInfo.managerName}
                      {condoData.leasingInfo.phone &&
                        `, ${condoData.leasingInfo.phone}`}
                      {condoData.leasingInfo.managerEmail &&
                        `, ${condoData.leasingInfo.managerEmail}`}
                    </p>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Same as property address:{" "}
                      <span className="font-semibold">
                        {condoData.leasingInfo.sameAddress ? "Yes" : "No"}
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Charges
                  <span className="text-red-500 text-sm ml-1">(Required)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("charges")}
                >
                  {condoData.charges ? (
                    <>
                      <FaRegEdit className="text-base" size={18} />
                      <span className="underline text-[16px]">Edit</span>
                    </>
                  ) : (
                    <>
                      <IoAdd className="text-base" />
                      Add
                    </>
                  )}
                </button>
              </h2>

              <div className="pt-15">
                {condoData.charges ? (
                  <>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Application fee : ${condoData.charges.applicationFee}
                      {condoData.charges.applicantType &&
                        ` (${condoData.charges.applicantType})`}
                    </p>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Admin fee : ${condoData.charges.adminFee}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Rent frequency & payment reminder
                  <span className="text-red-500 text-sm ml-1">(Required)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("rentReminder")}
                >
                  {condoData.rentReminder ? (
                    <>
                      <FaRegEdit className="text-base" size={18} />
                      <span className="underline text-[16px]">Edit</span>
                    </>
                  ) : (
                    <>
                      <IoAdd className="text-base" />
                      Add
                    </>
                  )}
                </button>
              </h2>

              <div className="pt-15">
                {condoData.rentReminder ? (
                  <>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Rent payment frequency :{" "}
                      {condoData.rentReminder.paymentFrequency}
                    </p>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Rent reminder date :{" "}
                      {condoData.rentReminder.reminderDate
                        ? new Date(
                            condoData.rentReminder.reminderDate
                          ).toLocaleDateString()
                        : "N/A"}
                      <br />
                      Rent due date :{" "}
                      {condoData.rentReminder.dueDate
                        ? new Date(
                            condoData.rentReminder.dueDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Application agreement
                  <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("applicationAgreement")}
                >
                  {condoData.applicationAgreement ? <></> : <></>}
                </button>
              </h2>
              <div className="pt-15">
                {condoData.applicationAgreement ? (
                  <>
                    <p className="text-gray-800 text-[15px] font-medium">
                      Agreement :{" "}
                      {condoData.applicationAgreement.agreementFileName ||
                        "No file uploaded"}
                    </p>
                    {condoData.applicationAgreement
                      .acceptImmigrantApplication && (
                      <p className="text-gray-700 pt-2 text-[15px] font-normal">
                        Accept immigrant & international student application
                        <span className="flex gap-2 mt-4">
                          <FaRegEdit
                            className="text-base cursor-pointer text-black"
                            size={18}
                            onClick={() =>
                              handleOpenPopup("applicationAgreement")
                            }
                          />
                          <RiDeleteBin6Line
                            className="text-base cursor-pointer text-red-500"
                            size={18}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this agreement?"
                                )
                              ) {
                                setCondoData((prev) => ({
                                  ...prev,
                                  applicationAgreement: null,
                                }));
                                toast.success("Application agreement removed.");
                              }
                            }}
                          />
                        </span>
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  About the property
                  <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("aboutProperty")}
                >
                  {condoData.aboutProperty ? <></> : <></>}
                </button>
              </h2>

              <div className="pt-15">
                {condoData.aboutProperty ? (
                  <p className="text-gray-800 text-[15px] font-medium leading-relaxed">
                    {condoData.aboutProperty.message ||
                      "No description provided"}
                    <span className="flex gap-2 mt-4">
                      <FaRegEdit
                        className="text-base cursor-pointer text-black"
                        size={18}
                        onClick={() => handleOpenPopup("aboutProperty")}
                      />
                      <RiDeleteBin6Line
                        className="text-base cursor-pointer text-red-500"
                        size={18}
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete the about property description?"
                            )
                          ) {
                            setCondoData((prev) => ({
                              ...prev,
                              aboutProperty: null,
                            }));
                            toast.success(
                              "About property description removed."
                            );
                          }
                        }}
                      />
                    </span>
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm italic">Not set</p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5">
              <h2 className="absolute top-0 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 py-4 px-4 flex items-center justify-between bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[17px]">
                  Community's amenity/features
                  <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                </div>
                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("communityAmenities")}
                >
                  {condoData.communityAmenities?.selectedAmenities?.length ? (
                    <>
                      <FaRegEdit className="text-base" size={18} />
                      <span className="underline text-[16px]">Edit</span>
                    </>
                  ) : (
                    <>
                      <IoAdd className="text-base" />
                      Add
                    </>
                  )}
                </button>
              </h2>

              <div className="pt-20 flex flex-wrap gap-3">
                {condoData.communityAmenities?.selectedAmenities?.length > 0 ? (
                  condoData.communityAmenities.selectedAmenities.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="relative px-5 py-3 font-semibold text-[15px] pr-7 border-2 border-gray-300 rounded-[12px] text-sm text-gray-800"
                      >
                        {item}
                        <button
                          onClick={() => handleAmenityRemove(index)}
                          className="absolute -top-1.5 -right-1.5 rounded-full hover:bg-red-100"
                        >
                          <IoClose className="text-[16px] text-white cursor-pointer bg-orange-600 rounded-full" />
                        </button>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No amenities selected
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full xl:w-[50%]">
            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5">
              <h2 className="absolute top-0 py-4 left-0 w-full border-b border-gray-300 rounded-t-[20px] rounded-b-none text-lg font-semibold text-gray-800 mb-4 flex items-center justify-between px-4 bg-white">
                <div className="flex items-center text-gray-800 text-[17px] sm:text-[18px]">
                  Pet fees
                  <span className="text-gray-500 text-sm ml-1">
                    (Optional, add fees if you allow pet)
                  </span>
                </div>

                <button
                  className="px-3 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("petFees")}
                >
                  <IoAdd className="text-base text-blue-700" size={20} />
                  <span className="underline text-[16px]">
                    {condoData.petFees ? "Add" : "Add"}
                  </span>
                </button>
              </h2>

              {condoData.petFees ? (
                <div className="pt-20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-gray-300">
                  <div className="text-gray-800 text-[15px] pb-4 font-medium space-y-1 flex-1">
                    <div className="flex flex-wrap gap-x-1">
                      <p>{condoData.petFees.petType} ,</p>
                      <p>Max weight : {condoData.petFees.maxWeight} lb</p>
                      <p>Monthly rent : ${condoData.petFees.monthlyRent}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-3">
                      <p>One time fee : ${condoData.petFees.oneTimeFee},</p>
                      <p>
                        Security deposit : ${condoData.petFees.securityDeposit}
                      </p>
                    </div>
                  </div>
                  <span className="flex gap-2">
                    <FaRegEdit
                      className="text-base cursor-pointer"
                      size={18}
                      onClick={() => handleOpenPopup("petFees")}
                    />
                    <RiDeleteBin6Line
                      className="text-base cursor-pointer text-red-500"
                      size={18}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete the pet fees information?"
                          )
                        ) {
                          setCondoData((prev) => ({
                            ...prev,
                            petFees: null,
                          }));
                          toast.success("Pet fees removed.");
                        }
                      }}
                    />
                  </span>
                </div>
              ) : (
                <p className="pt-20 text-gray-500 italic text-sm">
                  No pet fees added yet.
                </p>
              )}
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5 mx-auto">
              <h2 className="absolute top-0 left-0 w-full py-4 border-b border-gray-300 rounded-t-[20px] text-lg font-semibold text-gray-800 flex items-center justify-between px-4 bg-white">
                <div className="flex items-center text-gray-800 text-[16px] sm:text-[18px]">
                  Parking
                  <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                </div>
                <button
                  className="px-2 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("parking")}
                >
                  <IoAdd className="text-base text-blue-700" size={20} />
                  <span className="underline text-[14px] sm:text-[16px]">
                    Add
                  </span>
                </button>
              </h2>

              {condoData.parking ? (
                <div className="pt-20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-gray-300">
                  <div className="text-gray-800 text-[15px] pb-4 font-medium space-y-1 flex-1">
                    <p>
                      Guest vehicle parking time :{" "}
                      {condoData.parking.parkingTime}
                    </p>
                    <p className="break-words">
                      {condoData.parking.parkingOverview}
                    </p>
                  </div>
                  <span className="flex gap-2">
                    <FaRegEdit
                      className="text-base cursor-pointer"
                      size={18}
                      onClick={() => handleOpenPopup("parking")}
                    />
                    <RiDeleteBin6Line
                      className="text-base cursor-pointer text-red-500"
                      size={18}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete the parking information?"
                          )
                        ) {
                          setCondoData((prev) => ({
                            ...prev,
                            parking: null,
                          }));
                          toast.success("Parking information removed.");
                        }
                      }}
                    />
                  </span>
                </div>
              ) : (
                <p className="pt-20 text-gray-500 italic text-sm">Not set</p>
              )}
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5 mx-auto">
              <h2 className="absolute top-0 left-0 w-full py-4 border-b border-gray-300 rounded-t-[20px] text-lg font-semibold text-gray-800 flex items-center justify-between px-4 bg-white">
                <div className="flex flex-wrap items-center text-gray-800 text-[16px] sm:text-[18px]">
                  Nearest educational institution
                  <span className="text-gray-500 text-sm ml-1">
                    (Optional but recommended)
                  </span>
                </div>
                <button
                  className="px-2 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() =>
                    handleOpenPopup("nearestEducationalInstitution")
                  }
                >
                  <IoAdd className="text-blue-700" size={20} />
                  <span className="underline text-[14px] sm:text-[16px]">
                    Add
                  </span>
                </button>
              </h2>

              <div className="pt-20 space-y-3">
                {condoData.nearestEducationalInstitution?.length > 0 ? (
                  condoData.nearestEducationalInstitution.map((edu, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2 gap-2"
                    >
                      <p className="text-gray-800 text-[14px] sm:text-[15px] font-medium break-words">
                        <span>{edu.institutionType}</span>, &nbsp;
                        <span>{edu.institutionName}</span>, &nbsp;
                        <span>
                          {edu.distance}
                          {edu.distanceUnit}
                        </span>
                      </p>
                      <span className="flex gap-3">
                        <FaRegEdit
                          className="cursor-pointer text-black"
                          size={18}
                          onClick={() =>
                            handleOpenPopup(
                              "nearestEducationalInstitution",
                              index
                            )
                          }
                          title="Edit institution"
                        />
                        <RiDeleteBin6Line
                          className="cursor-pointer text-red-500"
                          size={18}
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this institution?"
                              )
                            ) {
                              const updated =
                                condoData.nearestEducationalInstitution.filter(
                                  (_, i) => i !== index
                                );
                              setCondoData((prev) => ({
                                ...prev,
                                nearestEducationalInstitution: updated,
                              }));
                              toast.success("Institution removed.");
                            }
                          }}
                          title="Delete institution"
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No institutions added yet.
                  </p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5 mx-auto">
              <h2 className="absolute top-0 left-0 w-full py-4 border-b border-gray-300 rounded-t-[20px] text-lg font-semibold text-gray-800 flex items-center justify-between px-4 bg-white">
                <div className="flex flex-wrap items-center text-gray-800 text-[16px] sm:text-[18px]">
                  Nearest stations
                  <span className="text-gray-500 text-sm ml-1">
                    (Optional but recommended)
                  </span>
                </div>
                <button
                  className="px-2 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("nearestStations")}
                >
                  <IoAdd className="text-blue-700" size={20} />
                  <span className="underline text-[14px] sm:text-[16px]">
                    Add
                  </span>
                </button>
              </h2>

              <div className="pt-20 space-y-3">
                {condoData.nearestStations?.length > 0 ? (
                  condoData.nearestStations.map((station, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2 gap-2"
                    >
                      <p className="text-gray-800 text-[14px] sm:text-[15px] font-medium break-words">
                        <span>{station.stationType}</span>
                        ,&nbsp;
                        <span>{station.stationName}</span>
                        ,&nbsp;
                        <span>
                          {station.distance} {station.distanceUnit}
                        </span>
                      </p>
                      <span className="flex gap-3">
                        <FaRegEdit
                          className="cursor-pointer text-black"
                          size={18}
                          onClick={() =>
                            handleOpenPopup("nearestStations", index)
                          }
                          title="Edit station"
                        />
                        <RiDeleteBin6Line
                          className="cursor-pointer text-red-500"
                          size={18}
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this station?"
                              )
                            ) {
                              const updated = condoData.nearestStations.filter(
                                (_, i) => i !== index
                              );
                              setCondoData((prev) => ({
                                ...prev,
                                nearestStations: updated,
                              }));
                              toast.success("Station removed.");
                            }
                          }}
                          title="Delete station"
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No stations added yet.
                  </p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5 mx-auto">
              <h2 className="absolute top-0 left-0 w-full py-4 border-b border-gray-300 rounded-t-[20px] text-lg font-semibold text-gray-800 flex items-center justify-between px-4 bg-white">
                <div className="flex flex-wrap items-center text-gray-800 text-[16px] sm:text-[18px]">
                  Nearest landmark
                  <span className="text-gray-500 text-sm ml-1">
                    (Optional but recommended)
                  </span>
                </div>
                <button
                  className="px-2 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("nearestLandmark")}
                >
                  <IoAdd className="text-blue-700" size={20} />
                  <span className="underline text-[14px] sm:text-[16px]">
                    Add
                  </span>
                </button>
              </h2>

              <div className="pt-20 space-y-3">
                {condoData.nearestLandmark?.length > 0 ? (
                  condoData.nearestLandmark.map((landmark, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2 gap-2"
                    >
                      <p className="text-gray-800 text-[14px] sm:text-[15px] font-medium break-words">
                        <span>{landmark.landmarkType}</span>
                        ,&nbsp;
                        <span>{landmark.landmarkName}</span>
                        ,&nbsp;
                        <span>
                          {landmark.distance} {landmark.distanceUnit}
                        </span>
                      </p>
                      <span className="flex gap-3">
                        <FaRegEdit
                          className="cursor-pointer text-black"
                          size={18}
                          onClick={() =>
                            handleOpenPopup("nearestLandmark", index)
                          }
                          title="Edit landmark"
                        />
                        <RiDeleteBin6Line
                          className="cursor-pointer text-red-500"
                          size={18}
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this landmark?"
                              )
                            ) {
                              const updated = condoData.nearestLandmark.filter(
                                (_, i) => i !== index
                              );
                              setCondoData((prev) => ({
                                ...prev,
                                nearestLandmark: updated,
                              }));
                              toast.success("Landmark removed.");
                            }
                          }}
                          title="Delete landmark"
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No landmarks added yet.
                  </p>
                )}
              </div>
            </div>

            <div className="relative mb-6 border border-gray-300 rounded-[20px] w-full max-w-[628px] min-h-[160px] p-4 sm:p-5 mx-auto">
              <h2 className="absolute top-0 left-0 w-full py-4 border-b border-gray-300 rounded-t-[20px] text-lg font-semibold text-gray-800 flex items-center justify-between px-4">
                <div className="flex flex-wrap items-center text-gray-800 text-[16px] sm:text-[18px]">
                  Utilities provider
                  <span className="text-gray-500 text-sm ml-1">
                    (Optional but recommended)
                  </span>
                </div>
                <button
                  className="px-2 py-1 text-sm rounded-lg cursor-pointer text-blue-700 flex items-center gap-1"
                  onClick={() => handleOpenPopup("utilitiesProvider")}
                >
                  <IoAdd className="text-blue-700" size={20} />
                  <span className="underline text-[14px] sm:text-[16px]">
                    Add
                  </span>
                </button>
              </h2>

              <div className="pt-20 space-y-3">
                {condoData.utilitiesProvider?.length > 0 ? (
                  condoData.utilitiesProvider.map((utility, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2 gap-2"
                    >
                      <p className="text-gray-800 text-[14px] sm:text-[15px] font-medium break-words">
                        {utility.type} - {utility.name}
                      </p>
                      <span className="flex gap-3">
                        <FaRegEdit
                          className="cursor-pointer text-black"
                          size={18}
                          onClick={() =>
                            handleOpenPopup("utilitiesProvider", index)
                          }
                          title="Edit utility"
                        />
                        <RiDeleteBin6Line
                          className="cursor-pointer text-red-500"
                          size={18}
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this utility?"
                              )
                            ) {
                              const updated =
                                condoData.utilitiesProvider.filter(
                                  (_, i) => i !== index
                                );
                              setCondoData((prev) => ({
                                ...prev,
                                utilitiesProvider: updated,
                              }));
                              toast.success("Utility removed.");
                            }
                          }}
                          title="Delete utility"
                        />
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    No utilities added yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-[14px] mb-10">
          <h2 className="pt-6 pl-5 text-gray-800 pb-4 text-[18px] font-semibold">
            Property Gallery
            <span className="text-gray-500">
              {" "}
              <span className="text-[16px]"> (It's not unit photo)*</span>
            </span>
          </h2>
          <div className="p-5 border-t border-gray-300 space-y-6 flex flex-wrap gap-8">
            <div>
              <h3 className="font-medium text-[17px] text-gray-700 mb-3">
                Featured Photos <span className="text-orange-500">*</span>
              </h3>

              <div className="flex flex-col md:flex-row flex-wrap">
                <div
                  className="w-full md:w-[217px] h-[165px] border-2 border-dashed border-blue-500 rounded-xl flex flex-col items-center justify-center text-gray-500 text-sm cursor-pointer gap-2 bg-gray-50"
                  onClick={() =>
                    document.getElementById("coverPhotoUpload").click()
                  }
                >
                  <Upload className="w-8 h-8 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                  <span className="text-[16px] text-gray-800 font-medium">
                    Upload cover photo
                  </span>
                  <span className="text-[12px] text-gray-500 font-semibold">
                    (Jpg, png only)
                  </span>
                  <input
                    type="file"
                    id="coverPhotoUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleCoverPhotoChange}
                  />
                  {coverPhoto && (
                    <span className="text-xs text-blue-600 mt-1">
                      {coverPhoto}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 lg:gap-x-2 md:gap-x-4 sm:gap-x-4 mt-4 md:mt-0 md:ml-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[101px] h-[75px] border-2 border-dashed border-blue-500 rounded-xl flex items-center justify-center cursor-pointer bg-gray-50 relative"
                      onClick={() =>
                        document.getElementById(`featured-${i}`).click()
                      }
                    >
                      <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                      <input
                        type="file"
                        id={`featured-${i}`}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleMorePhotoChange(i, e)}
                      />
                      {morePhotos[i] && (
                        <span className="absolute bottom-1 text-[10px] text-blue-600 truncate w-full text-center">
                          {morePhotos[i]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-[17px] text-gray-700 mb-3">
                More Photos{" "}
                <span className="text-[16px] text-gray-500">(optional)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i + 4}
                    className="w-[101px] h-[75px] border-2 border-dashed border-blue-500 rounded-xl flex items-center justify-center cursor-pointer bg-gray-50 relative"
                    onClick={() =>
                      document.getElementById(`more-${i + 4}`).click()
                    }
                  >
                    <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                    <input
                      type="file"
                      id={`more-${i + 4}`}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleMorePhotoChange(i + 4, e)}
                    />
                    {morePhotos[i + 4] && (
                      <span className="absolute bottom-1 text-[10px] text-blue-600 truncate w-full text-center px-1">
                        {morePhotos[i + 4]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-[14px] overflow-hidden">
          <div
            className="w-full flex justify-between items-center bg-gray-100 px-5 py-4 cursor-pointer"
            onClick={() => setShowVideosSection(!showVideosSection)}
          >
            <h3 className="font-medium text-[17px] text-gray-800">
              Videos{" "}
              <span className="text-gray-500">
                {" "}
                <span className="text-[16px]">(optional) </span>{" "}
              </span>
            </h3>
            <span className="border rounded-full">
              {showVideosSection ? (
                <IoIosArrowUp size={18} />
              ) : (
                <IoIosArrowDown size={18} />
              )}
            </span>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out ${
              showVideosSection
                ? "max-h-[500px] opacity-100 py-4"
                : "max-h-0 opacity-0"
            }`}
          >
            {showVideosSection && (
              <div className="grid w-[691px] grid-cols-1 sm:grid-cols-3 ml-6 mb-2">
                <div className="flex flex-col items-center w-[127px] justify-start text-gray-500 text-sm cursor-pointer gap-1">
                  <p className="font-medium text-gray-800 text-[15px] mb-2 ml-10 w-[185px] text-center">
                    Property Video
                    <span className="text-gray-500 ml-1">(optional)</span>
                  </p>

                  <div
                    className="flex flex-col w-[127px] h-[110px] items-center justify-center p-4 border-2 border-dashed border-blue-500 rounded-xl"
                    onClick={() =>
                      document.getElementById("propertyVideoUpload").click()
                    }
                  >
                    <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                    <p className="text-[13px] font-semibold text-gray-800 pb-1 pt-1">
                      Upload Video
                    </p>
                    <p className="text-[11px] font-medium">(MP4, MOV only)</p>
                    <input
                      type="file"
                      id="propertyVideoUpload"
                      className="hidden"
                      accept=".mp4,.mov"
                      onChange={(e) =>
                        handleVideoFileChange(setPropertyVideoFile, e)
                      }
                    />
                    {propertyVideoFile && (
                      <span className="text-blue-600 text-xs mt-1">
                        {propertyVideoFile}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center w-[127px] justify-start text-gray-500 text-sm cursor-pointer gap-1">
                  <p className="font-medium text-gray-800 text-[15px] mb-2 ml-10 w-[185px] text-center">
                    Property Video
                    <span className="text-gray-500 ml-1">(optional)</span>
                  </p>

                  <div
                    className="flex flex-col w-[127px] h-[110px] items-center justify-center p-4 border-2 border-dashed border-blue-500 rounded-xl"
                    onClick={() =>
                      document.getElementById("propertyVideoUpload").click()
                    }
                  >
                    <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                    <p className="text-[13px] font-semibold text-gray-800 pb-1 pt-1">
                      Upload Video
                    </p>
                    <p className="text-[11px] font-medium">(MP4, MOV only)</p>
                    <input
                      type="file"
                      id="propertyVideoUpload"
                      className="hidden"
                      accept=".mp4,.mov"
                      onChange={(e) =>
                        handleVideoFileChange(setPropertyVideoFile, e)
                      }
                    />
                    {propertyVideoFile && (
                      <span className="text-blue-600 text-xs mt-1">
                        {propertyVideoFile}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center w-[127px] justify-start text-gray-500 text-sm cursor-pointer gap-1">
                  <p className="font-medium text-gray-800 text-[15px] mb-2 ml-10 w-[185px] text-center">
                    Property Video
                    <span className="text-gray-500 ml-1">(optional)</span>
                  </p>

                  <div
                    className="flex flex-col w-[127px] h-[110px] items-center justify-center p-4 border-2 border-dashed border-blue-500 rounded-xl"
                    onClick={() =>
                      document.getElementById("propertyVideoUpload").click()
                    }
                  >
                    <Upload className="w-7 h-7 text-black border-2 border-dashed border-blue-400 rounded-md p-1" />
                    <p className="text-[13px] font-semibold text-gray-800 pb-1 pt-1">
                      Upload Video
                    </p>
                    <p className="text-[11px] font-medium">(MP4, MOV only)</p>
                    <input
                      type="file"
                      id="propertyVideoUpload"
                      className="hidden"
                      accept=".mp4,.mov"
                      onChange={(e) =>
                        handleVideoFileChange(setPropertyVideoFile, e)
                      }
                    />
                    {propertyVideoFile && (
                      <span className="text-blue-600 text-xs mt-1">
                        {propertyVideoFile}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <PropertyAddressPopup
          isOpen={openPopup === "propertyAddress"}
          onClose={handleClosePopup}
          initialData={condoData.propertyAddress}
          onSaveData={(data) => handleSaveSectionData("propertyAddress", data)}
        />
        <LeasingInfoPopup
          isOpen={openPopup === "leasingInfo"}
          onClose={handleClosePopup}
          initialData={condoData.leasingInfo}
          onSaveData={(data) => handleSaveSectionData("leasingInfo", data)}
        />
        <ChargesPopup
          isOpen={openPopup === "charges"}
          onClose={handleClosePopup}
          initialData={condoData.charges}
          onSaveData={(data) => handleSaveSectionData("charges", data)}
        />
        <RentPopup
          isOpen={openPopup === "rentReminder"}
          onClose={handleClosePopup}
          initialData={condoData.rentReminder}
          onSaveData={(data) => handleSaveSectionData("rentReminder", data)}
        />
        {openPopup === "applicationAgreement" && (
          <ApplicationAgreementPopup
            isOpen={openPopup === "applicationAgreement"}
            onClose={handleClosePopup}
            initialData={condoData.applicationAgreement} // pass current data here
            onSaveData={(data) =>
              handleSaveSectionData("applicationAgreement", data)
            }
          />
        )}
        <AboutPropertyPopup
          isOpen={openPopup === "aboutProperty"}
          onClose={handleClosePopup}
          initialData={condoData.aboutProperty}
          onSaveData={(data) => handleSaveSectionData("aboutProperty", data)}
        />
        <CommunityPopup
          isOpen={openPopup === "communityAmenities"}
          onClose={handleClosePopup}
          initialData={condoData.communityAmenities}
          onSaveData={(data) =>
            handleSaveSectionData("communityAmenities", data)
          }
        />
        <PetFeesPopup
          isOpen={openPopup === "petFees"}
          onClose={handleClosePopup}
          initialData={condoData.petFees}
          onSaveData={(data) => handleSaveSectionData("petFees", data)}
        />
        <ParkingPopup
          isOpen={openPopup === "parking"}
          onClose={handleClosePopup}
          initialData={condoData.parking}
          onSaveData={(data) => handleSaveSectionData("parking", data)}
        />
        <EducationPopup
          isOpen={openPopup === "nearestEducationalInstitution"}
          onClose={handleClosePopup}
          initialData={
            condoData.nearestEducationalInstitution.length > 0
              ? condoData.nearestEducationalInstitution[0]
              : null
          }
          onSaveData={(data) =>
            handleSaveSectionData("nearestEducationalInstitution", [data])
          }
        />
        <NearestStationPopup
          isOpen={openPopup === "nearestStations"}
          onClose={handleClosePopup}
          initialData={
            condoData.nearestStations && condoData.nearestStations.length > 0
              ? condoData.nearestStations[0]
              : null
          }
          onSaveData={(data) =>
            handleSaveSectionData("nearestStations", [data])
          }
        />
        <NearestLandmarkPopup
          isOpen={openPopup === "nearestLandmark"}
          onClose={handleClosePopup}
          initialData={
            condoData.nearestLandmark?.length > 0
              ? condoData.nearestLandmark[0]
              : null
          }
          onSaveData={(data) =>
            handleSaveSectionData("nearestLandmark", [data])
          }
        />

        <UtilitiesProviderPopup
          isOpen={openPopup === "utilitiesProvider"}
          onClose={handleClosePopup}
          initialData={
            condoData.utilitiesProvider?.length > 0
              ? condoData.utilitiesProvider[0]
              : null
          }
          onSaveData={(data) =>
            handleSaveSectionData("utilitiesProvider", [data])
          }
        />
      </div>
    </div>
  );
};

export default CondoSummary;
