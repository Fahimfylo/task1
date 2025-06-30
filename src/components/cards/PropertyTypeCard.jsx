const PropertyTypeCard = ({ title, selected, onClick, img }) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-[96px] max-w-[410px] w-full flex items-center p-5 rounded-lg cursor-pointer select-none transition-all 
        border
        ${
          selected
            ? "border-blue-600 shadow-md bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }

        w-full            
        max-w-[410px]  
      `}
    >
      <img src={img} alt="" />
      <h3 className="text-[16px] pl-2 font-medium">{title}</h3>
    </div>
  );
};

export default PropertyTypeCard;
