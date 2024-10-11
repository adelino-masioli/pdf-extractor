"use client";

import { useFileUpload } from "@/hooks/useFileUpload";
import { usePdfStore } from "@/store/pdfStore";
import React from "react";
import { FileInput } from "./FileInput";
import { PdfContent } from "./PdfContent";
import { UploadButton } from "./UploadButton";

export const PdfUploader: React.FC = () => {
  const { file, isLoading, error, handleFileChange, uploadFile } =
    useFileUpload();
  const { pdfContent, setPdfContent } = usePdfStore();

  const handleUpload = async () => {
    const content = await uploadFile();
    if (content) {
      setPdfContent(content);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Upload de PDF</h2>
      <div className="flex flex-col gap-4">
        <FileInput file={file} onChange={handleFileChange} />
        <UploadButton
          onClick={handleUpload}
          disabled={!file || isLoading}
          isLoading={isLoading}
        />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {pdfContent && <PdfContent content={pdfContent} />}
    </div>
  );
};
