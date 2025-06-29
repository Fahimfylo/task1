import React, { useState } from "react";
import PropertyTypeCard from "../components/cards/PropertyTypeCard";
import RoleCard from "../components/cards/RoleCard";
import ProofOfOwnership from "../features/landlord/Proofofownership"; // also fixed import casing
import RealtorVerification from "../features/landlord/RealtorVerification";
import CompanyOfficeForm from "../features/landlord/CompanyOfficeForm";

const propertyTypes = [
  { id: "single", title: "Single House Property" },
  { id: "apartment", title: "Apartments Complex" },
  { id: "condominium", title: "Condominiums" },
];

const roles = [
  { id: "landlord", title: "Landlord" },
  { id: "realtor", title: "Realtor" },
  { id: "company", title: "Property Management Company" },
];

const Home = ({ hasPermission, setHasPermission }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  // Fix: define togglePermission inside the component
  const togglePermission = () => setHasPermission((prev) => !prev);

  return (
    <div className="space-y-10 max-w-[1280px] mx-auto p-4">
      {/* Property Type Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Property Type</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-between">
          {propertyTypes.map((type) => (
            <PropertyTypeCard
              key={type.id}
              title={type.title}
              selected={selectedPropertyType === type.id}
              onClick={() => setSelectedPropertyType(type.id)}
            />
          ))}
        </div>
      </section>

      {/* Role Selection Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Select Role</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-between">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              selected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </section>

      {/* Dynamic Form Section */}
      <section className="mt-8">
        {selectedRole === "landlord" && <ProofOfOwnership />}
        {selectedRole === "realtor" && <RealtorVerification />}
        {selectedRole === "company" && <CompanyOfficeForm />}
      </section>

      {/* Checkbox */}
      <section className="mt-8">
        <label className="inline-flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={hasPermission}
            onChange={togglePermission}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>I grant RentYard permission</span>
        </label>
      </section>
    </div>
  );
};

export default Home;
