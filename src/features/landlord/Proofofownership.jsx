import React, { useState } from "react";

const ProofOfOwnership = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <h3>Proof of Ownership</h3>
      <input className="bg-gray-200"
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default ProofOfOwnership;
