import React, { useState } from "react"; // Corrected syntax here
import { Plus, Upload } from "lucide-react"; // Upload from lucide-react for photos
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; // Up and Down arrows for video toggle
import PropertyAddressPopup from "../components/Manageproperty/popups/PropertyAddressPopup";
import LeasingInfoPopup from "../components/Manageproperty/popups/LeasingInfoPopup";
import ChargesPopup from "../components/Manageproperty/popups/ChargesPopup";
import RentPopup from "../components/Manageproperty/popups/RentPopup";
import ApplicationPopup from "../components/Manageproperty/popups/ApplicationPopup"; // Assuming this is correct
import AboutPropertyPopup from "../components/Manageproperty/popups/AboutPropertyPopup";
import CommunityPopup from "../components/Manageproperty/popups/CommunitiesPopup"; // Renamed to CommunitiesPopup based on your imports
import PetFeesPopup from "../components/Manageproperty/popups/PetFeesPopup";
import ParkingPopup from "../components/Manageproperty/popups/ParkingPopup";
import EducationPopup from "../components/Manageproperty/popups/EducationPopup";
import NearestStationPopup from "../components/Manageproperty/popups/NearestStationPopup";
import NearestLandmarkPopup from "../components/Manageproperty/popups/NearestLandmarkPopup";
import UtilitiesProviderPopup from "../components/Manageproperty/popups/UtilitiesProviderPopup";

const CondoInformationForm = () => {
  // States for controlling popup visibility
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [showLeasingPopup, setShowLeasingPopup] = useState(false);
  const [showChargesPopup, setChargesPopup] = useState(false);
  const [showRentPopup, setRentPopup] = useState(false);
  const [showApplicationPopup, setApplicationPopup] = useState(false);
  const [showAboutPropertyPopup, setAboutPropertyPopup] = useState(false);
  const [showCommunityPopup, setCommunityPopup] = useState(false);
  const [showPetFeesPopup, setPetFeesPopup] = useState(false);
  const [showParkingPopup, setParkingPopup] = useState(false);
  const [showEducationPopup, setEducationPopup] = useState(false);
  const [showNearestStationPopup, setNearestStationPopup] = useState(false);
  const [showNearestLandmarkPopup, setNearestLandmarkPopup] = useState(false);
  const [showUtilitiesProviderPopup, setUtilitiesProviderPopup] =
    useState(false);

  // Photos Upload
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [morePhotos, setMorePhotos] = useState(Array(12).fill(null));

  // Videos Upload
  const [showVideosSection, setShowVideosSection] = useState(false);
  const [propertyVideoFile, setPropertyVideoFile] = useState(null);

  const formFields = [
    { label: "Property address", note: "(Required)", key: "property_address" },
    { label: "Pet fees", note: "(Optional, add fees if you allow pet)" },
    { label: "Leasing info", note: "(Required)" },
    { label: "Parking", note: "(Optional)" },
    { label: "Charges", note: "(Required)" },
    {
      label: "Nearest educational institution",
      note: "(Optional but recommended)",
    },
    { label: "Rent frequency & payment reminder", note: "(Required)" },
    { label: "Nearest Stations", note: "(Optional but recommended)" },
    { label: "Application agreement", note: "(Optional)" },
    { label: "Nearest landmark", note: "(Optional but recommended)" },
    { label: "About the property", note: "(Optional)" },
    { label: "Utilities provider", note: "(Optional but recommended)" },
    {
      label: "Community's amenity/features",
      note: "(Optional but recommended)",
    },
  ];

  const handleAddClick = (label) => {
    if (label === "Property address") {
      setShowAddressPopup(true);
    } else if (label === "Leasing info") {
      setShowLeasingPopup(true);
    } else if (label === "Charges") {
      setChargesPopup(true);
    } else if (label === "Rent frequency & payment reminder") {
      setRentPopup(true);
    } else if (label === "Application agreement") {
      setApplicationPopup(true);
    } else if (label === "About the property") {
      setAboutPropertyPopup(true);
    } else if (label === "Community's amenity/features") {
      setCommunityPopup(true);
    } else if (label === "Pet fees") {
      setPetFeesPopup(true);
    } else if (label === "Parking") {
      setParkingPopup(true);
    } else if (label === "Nearest educational institution") {
      setEducationPopup(true);
    } else if (label === "Nearest Stations") {
      setNearestStationPopup(true);
    } else if (label === "Nearest landmark") {
      setNearestLandmarkPopup(true);
    } else if (label === "Utilities provider") {
      setUtilitiesProviderPopup(true);
    }
  };

  // Photo handler
  const handleCoverPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverPhoto(e.target.files[0].name); // Just storing name for now
      console.log("Cover Photo:", e.target.files[0]);
    }
  };

  const handleMorePhotoChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const updatedPhotos = [...morePhotos];
      updatedPhotos[index] = e.target.files[0].name; // Store name
      setMorePhotos(updatedPhotos);
      console.log(`More Photo ${index + 1}:`, e.target.files[0]);
    }
  };

  // Video handler
  const handleVideoFileChange = (setter, event) => {
    if (event.target.files && event.target.files[0]) {
      setter(event.target.files[0].name); // Store just the file name
      console.log("Selected video file:", event.target.files[0].name);
    } else {
      setter(null); // Clear file name if no file selected
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-5">
      <h1 className="py-[10px] text-[19px] font-semibold">
        Condominiums information
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
        {formFields.map((field, idx) => (
          <div
            key={idx}
            className="w-full border border-gray-300 rounded-[20px] flex items-center justify-between"
          >
            <label className="block h-[66px] px-5 py-3 lg:py-5 md:py-4 sm:py-5 font-medium text-gray-700">
              {field.label}{" "}
              <span
                className={`text-sm ${
                  field.note.includes("Required")
                    ? "text-orange-500"
                    : "text-gray-500"
                }`}
              >
                {field.note}
              </span>
            </label>

            <button
              onClick={() => handleAddClick(field.label)}
              className="text-blue-600 flex items-center px-5 text-sm font-medium"
            >
              <Plus className="w-5 h-5 mr-1 text-blue-500" />
              <span className="underline cursor-pointer text-[13px]">Add</span>
            </button>
          </div>
        ))}
      </div>

      {/* Phptos layout */}
      <div className="border border-gray-300 rounded-[14px]">
        <h2 className="pt-6 pl-5 text-gray-700 pb-3 font-semibold">
          Property Gallery
          <span className="text-gray-500">(It's not unit photo)*</span>
        </h2>
        <div className="p-5 border-t border-gray-300 space-y-6 flex flex-wrap gap-8">
          <div className="">
            <h3 className="font-medium text-gray-700 mb-3">
              Featured Photos <span className="text-orange-500">*</span>
            </h3>

            <div className="flex flex-col md:flex-row gap-2 flex-wrap">
              {/* Cover Photo */}
              <div
                className="w-full md:w-[217px] h-[165px] border-2 border-dashed border-blue-500 rounded-xl flex flex-col items-center justify-center text-gray-500 text-sm cursor-pointer gap-2 bg-gray-50"
                onClick={() =>
                  document.getElementById("coverPhotoUpload").click()
                }
              >
                <Upload className="w-8 h-8 text-black border-2 border-dashed border-blue-500 rounded-md p-1" />
                Upload cover photo
                <span className="text-[12px] text-gray-500">
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

              {/* 4 boxes (2x2) with controlled gaps and responsive shrink */}
              <div className="grid grid-cols-2 gap-y-3 lg:gap-x-2 md:gap-x-4 sm:gap-x-4 mt-4 md:mt-0 md:ml-4">
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
            <h3 className="font-medium text-gray-700 mb-3">
              More Photos <span className="text-gray-500">(optional)</span>
            </h3>
            <div className="grid grid-cols-4 lg:gap-x-2 md:gap-x-4 sm:gap-x-4 gap-y-3">
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
                    <span className="absolute bottom-1 text-[10px] text-blue-600 truncate w-full text-center">
                      {morePhotos[i + 4]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Videos layout */}
      <div className="border border-gray-300 rounded-[14px] overflow-hidden">
        <div
          className="w-full flex justify-between items-center bg-gray-100 px-5 py-4 cursor-pointer"
          onClick={() => setShowVideosSection(!showVideosSection)}
        >
          <h3 className="font-medium text-gray-700 ">
            Videos <span className="text-gray-500">(optional)</span>
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
              {/* Property Video */}
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
        isOpen={showAddressPopup}
        onClose={() => setShowAddressPopup(false)}
        // You would pass initialData and onSaveData props here if managing data
      />
      <LeasingInfoPopup
        isOpen={showLeasingPopup}
        onClose={() => setShowLeasingPopup(false)}
      />
      <ChargesPopup
        isOpen={showChargesPopup}
        onClose={() => setChargesPopup(false)}
      />
      <RentPopup isOpen={showRentPopup} onClose={() => setRentPopup(false)} />
      <ApplicationPopup
        isOpen={showApplicationPopup}
        onClose={() => setApplicationPopup(false)}
      />
      <AboutPropertyPopup
        isOpen={showAboutPropertyPopup}
        onClose={() => setAboutPropertyPopup(false)}
      />
      <CommunityPopup
        isOpen={showCommunityPopup}
        onClose={() => setCommunityPopup(false)}
      />
      <PetFeesPopup
        isOpen={showPetFeesPopup}
        onClose={() => setPetFeesPopup(false)}
      />
      <ParkingPopup
        isOpen={showParkingPopup}
        onClose={() => setParkingPopup(false)}
      />
      <EducationPopup
        isOpen={showEducationPopup}
        onClose={() => setEducationPopup(false)}
      />
      <NearestStationPopup
        isOpen={showNearestStationPopup}
        onClose={() => setNearestStationPopup(false)}
      />
      <NearestLandmarkPopup
        isOpen={showNearestLandmarkPopup}
        onClose={() => setNearestLandmarkPopup(false)}
      />
      <UtilitiesProviderPopup
        isOpen={showUtilitiesProviderPopup}
        onClose={() => setUtilitiesProviderPopup(false)}
      />
    </div>
  );
};

export default CondoInformationForm;
