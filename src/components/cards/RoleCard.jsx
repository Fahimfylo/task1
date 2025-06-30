const RoleCard = ({ title, selected, onClick, img }) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-[96px] flex items-center p-5 rounded-lg cursor-pointer text-center select-none transition-all 
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
      <img src={img} alt="" />
      <h3 className="text-[16px] pl-2 font-medium">{title}</h3>
    </div>
  );
};

export default RoleCard;
