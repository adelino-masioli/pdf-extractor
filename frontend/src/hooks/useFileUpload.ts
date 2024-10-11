import axios from "axios";
import { useState } from "react";

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setError(null);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      setError("Por favor, selecione um arquivo PDF.");
      return null;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL as string,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data.content;
    } catch (error) {
      console.error("Erro ao fazer upload do PDF:", error);
      setError("Ocorreu um erro ao fazer o upload do arquivo.");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { file, isLoading, error, handleFileChange, uploadFile };
};
