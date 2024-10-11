import cors from "cors";
import express from "express";
import multer from "multer";
import { parsePdf } from "./pdfParser";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/upload", upload.single("pdf"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Nenhum arquivo enviado" });
  }

  try {
    const content = await parsePdf(req.file.path);
    res.json({ content });
  } catch (error) {
    res.status(500).json({ message: "Erro ao processar o PDF" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
