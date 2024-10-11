import React from "react";

interface UploadButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  onClick,
  disabled,
  isLoading,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`py-2 px-4 rounded text-white transition duration-200 
      ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
  >
    {isLoading ? "Carregando..." : "Upload PDF"}
  </button>
);
