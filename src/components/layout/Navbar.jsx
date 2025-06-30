import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const handleClick = () => {
    toast.success("Saved successfully!");
  };

  return (
    <nav className="w-full items-center h-[79px] mx-auto border-b flex justify-between border-gray-300 pb-5">
      <img
        src="/images/logo.png"
        alt=""
        className="lg:ml-20 md:lg-5 mt-5 ml-5"
      />
      <button
        onClick={handleClick}
        className="border font-semibold hover:bg-gray-100 cursor-pointer border-gray-300 rounded-[12px] lg:mr-20 md:mr-5 mt-5 px-5 mx-5 h-[47px]"
      >
        {isHome ? "Exit" : "Save & Exit"}
      </button>
    </nav>
  );
};

export default Navbar;
