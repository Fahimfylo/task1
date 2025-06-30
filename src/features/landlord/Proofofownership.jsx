import React, { useState } from "react";

const ProofOfOwnership = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col w-full max-w-[1280px] max-h-[175px] h-full bg-white rounded-lg shadow-sm overflow-hidden mx-auto">
      <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
        <h3 className="text-[15px] font-semibold text-gray-600">
          Proof of ownership
        </h3>
      </div>
      <div className="px-6 py-5">
        <div className="flex flex-col">
          <label
            htmlFor="ownershipDocUpload"
            className="font-medium text-gray-800 text-[16px] mb-2"
          >
            Ownership doc<span>*</span>
          </label>
          <div
            className="relative bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors duration-200
                      h-[48px] w-full sm:w-72 md:w-80 overflow-hidden"
            onClick={() =>
              document.getElementById("ownershipDocUpload").click()
            }
          >
            <input
              type="file"
              id="ownershipDocUpload"
              className="hidden"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="flex flex-row gap-2 items-center whitespace-nowrap overflow-hidden">
              <img src="../../../public/images/upload-02.png" alt="" className="h-5"/>
              <p className="text-gray-500 font-medium text-sm truncate">
                {file ? file.name : "(Pdf only)"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofOfOwnership;
