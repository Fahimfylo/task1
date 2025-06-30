import { useState } from "react";
import PropertyTypeCard from "../components/cards/PropertyTypeCard";
import RoleCard from "../components/cards/RoleCard";
import ProofOfOwnership from "../features/landlord/Proofofownership";
import RealtorVerification from "../features/landlord/RealtorVerification";
import CompanyOfficeForm from "../features/landlord/CompanyOfficeForm";

import img1 from "../../public/images/Badge (1).png";
import img2 from "../../public/images/Badge (2).png";
import img3 from "../../public/images/Badge (3).png";
import img4 from "../../public/images/Badge (4).png";
import img5 from "../../public/images/Badge (5).png";
import img6 from "../../public/images/Badge (6).png";

const propertyTypes = [
  { id: "single", title: "Single House Property", img: img1 },
  { id: "apartment", title: "Apartments Complex", img: img2 },
  { id: "condominium", title: "Condominiums", img: img3 },
];

const roles = [
  { id: "landlord", title: "Landlord", img: img4 },
  { id: "realtor", title: "Realtor", img: img5 },
  { id: "company", title: "Property Management Company", img: img6 },
];

const Home = ({ hasPermission, setHasPermission }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const togglePermission = () => setHasPermission((prev) => !prev);

  return (
    <div className="space-y-10 max-w-[1280px] mx-auto p-4">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Property Type</h2>
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6 md:justify-between">
          {propertyTypes.map((type) => (
            <PropertyTypeCard
              key={type.id}
              title={type.title}
              img={type.img}
              selected={selectedPropertyType === type.id}
              onClick={() => {
                setSelectedPropertyType(type.id);
                setCardClicked(true);
              }}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Select Role</h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:justify-between">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              img={role.img}
              selected={selectedRole === role.id}
              onClick={() => {
                setSelectedRole(role.id);
                setCardClicked(true);
              }}
            />
          ))}
        </div>
      </section>
      <section className="mt-8">
        {selectedRole === "landlord" && <ProofOfOwnership />}
        {selectedRole === "realtor" && <RealtorVerification />}
        {selectedRole === "company" && <CompanyOfficeForm />}
      </section>
      {cardClicked && (
        <section className="mt-8 relative z-0">
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hasPermission}
              onChange={togglePermission}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="text-gray-800 font-medium">
              I accept RentYard's property listing terms and conditions
            </span>
          </label>
        </section>
      )}
    </div>
  );
};

export default Home;
