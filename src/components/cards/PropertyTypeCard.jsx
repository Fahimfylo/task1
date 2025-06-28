const PropertyTypeCard = ({ title, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-[96px] flex items-center justify-center p-5 rounded-lg cursor-pointer text-center select-none transition-all 
        border
        ${
          selected
            ? "border-blue-600 shadow-md bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }

        w-full            /* full width on small */
        max-w-[410px]     /* max width 410px on medium+ */
      `}
    >
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

export default PropertyTypeCard;
