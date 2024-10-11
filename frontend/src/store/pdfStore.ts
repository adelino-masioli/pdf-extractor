import { create } from "zustand";

interface PdfStore {
  pdfContent: string;
  setPdfContent: (content: string) => void;
}

export const usePdfStore = create<PdfStore>((set) => ({
  pdfContent: "",
  setPdfContent: (content) => set({ pdfContent: content }),
}));
