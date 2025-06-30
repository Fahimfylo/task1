import { X } from "lucide-react";

const ReusablePopup = ({
  isOpen,
  title,
  onClose,
  onSave,
  children,
  className = "",
  footerLeft = null,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-0">
      <div
        className={`w-full max-w-[780px] rounded-xl shadow-lg flex flex-col overflow-hidden bg-white ${className}`}
      >
        <div className="flex justify-between bg-gray-100 items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300">
          <h2 className="text-lg font-medium text-gray-500 text-[15px]">
            {title}
          </h2>
          <button onClick={onClose} aria-label="Close popup" className="p-1">
            <X className="w-5 h-5 cursor-pointer text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300">
          {footerLeft ? (
            <div className="text-gray-600 text-sm">{footerLeft}</div>
          ) : (
            <div />
          )}
          <button
            onClick={onSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-[12px]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusablePopup;
