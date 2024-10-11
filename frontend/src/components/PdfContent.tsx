import React from "react";
import { useTextFormatter } from "../hooks/useTextFormatter";

interface PdfContentProps {
  content: string;
}

export const PdfContent: React.FC<PdfContentProps> = ({ content }) => {
  const { formatText } = useTextFormatter();
  const formattedContent = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {formatText(line)}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Conteúdo do PDF:</h3>
      <pre className="whitespace-pre-wrap break-words bg-gray-100 p-4 border border-gray-300 rounded">
        {formattedContent}
      </pre>
    </div>
  );
};
