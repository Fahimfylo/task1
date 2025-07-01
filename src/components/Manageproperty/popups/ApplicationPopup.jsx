import { useState, useEffect } from "react";
import ReusablePopup from "../../../components/common/ReusablePopup";
import toast from "react-hot-toast";

const ApplicationAgreementPopup = ({
  isOpen,
  onClose,
  initialData,
  onSaveData,
}) => {
  const [agreementFile, setAgreementFile] = useState(null);
  const [acceptImmigrantApplication, setAcceptImmigrantApplication] =
    useState(false);

  useEffect(() => {
    if (initialData) {
      setAgreementFile(initialData.agreementFileName || null);
      setAcceptImmigrantApplication(!!initialData.acceptImmigrantApplication);
    } else {
      setAgreementFile(null);
      setAcceptImmigrantApplication(false);
    }
  }, [initialData]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAgreementFile(event.target.files[0]);
      console.log("Selected file:", event.target.files[0].name);
    }
  };

  const handleSave = () => {
    onSaveData({
      agreementFileName: agreementFile?.name || agreementFile, 
      acceptImmigrantApplication,
    });
    toast.success("Saved successfully!");
    onClose();
  };

  return (
    <ReusablePopup
      isOpen={isOpen}
      title="Application agreement (optional)"
      onClose={onClose}
      onSave={handleSave}
    >
      <div className="flex flex-col justify-center w-[780px] h-[180px] px-6 py-6 space-y-4 overflow-hidden">
        <div className="flex flex-col">
          <label
            htmlFor="uploadAgreement"
            className="font-medium text-gray-800 text-[15px] mb-4"
          >
            Upload agreement
          </label>
          <div
            className="relative bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors duration-200 h-[48px] w-[732px]"
            onClick={() => document.getElementById("fileUpload").click()}
          >
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf"
            />
            <div className="flex flex-row gap-2 items-center">
              <img src="../../../../public/images/upload-02.png" alt="" />
              <p className="text-gray-600 font-medium text-sm">
                {agreementFile
                  ? typeof agreementFile === "string"
                    ? agreementFile
                    : agreementFile.name
                  : "(Pdf only)"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptImmigrantApplication"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            checked={acceptImmigrantApplication}
            onChange={(e) => setAcceptImmigrantApplication(e.target.checked)}
          />
          <label
            htmlFor="acceptImmigrantApplication"
            className="ml-2 text-gray-700 text-sm font-medium cursor-pointer"
          >
            Accept immigrant & international student application
          </label>
        </div>
      </div>
    </ReusablePopup>
  );
};

export default ApplicationAgreementPopup;
