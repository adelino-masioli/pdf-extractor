import React from "react";

interface FileInputProps {
  file: File | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ file, onChange }) => (
  <label
    htmlFor="pdf-upload"
    className="block p-3 text-center bg-gray-200 border border-gray-300 rounded cursor-pointer hover:bg-gray-300"
  >
    {file ? file.name : "Escolha um arquivo PDF"}
    <input
      id="pdf-upload"
      type="file"
      accept=".pdf"
      onChange={onChange}
      className="hidden"
    />
  </label>
);
