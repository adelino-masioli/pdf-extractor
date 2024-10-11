# PDF Extractor 🇧🇷

PDF Extractor é uma aplicação web que permite aos usuários fazer upload de arquivos PDF e extrair seu conteúdo. O projeto é dividido em duas partes principais: frontend e backend.

## 🚀 Estrutura do Projeto

```plaintext
pdf-extractor/
│
├── frontend/    # Aplicação React/Next.js
│
└── backend/     # API Node.js
```

## 🛠️ Tecnologias Utilizadas

### Frontend

- React.js
- Next.js
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- Multer (para upload de arquivos)
- pdf-parse (para extração de conteúdo PDF)

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:

```
git clone git@github.com:adelino-masioli/pdf-extractor.git
cd pdf-extractor
```

2. Instale as dependências do frontend:
   cd frontend
   npm install

3. Instale as dependências do backend:
   cd ../backend
   npm install

4. Configure as variáveis de ambiente:

- No frontend, crie um arquivo `.env.local` e adicione:

```

NEXT_PUBLIC_API_URL=http://localhost:3001

```

- No backend, crie um arquivo `.env` e adicione:

```

PORT=3001

```

## 🚀 Executando o Projeto

1. Inicie o backend:

```
cd backend
npm run dev
```

2. Em outro terminal, inicie o frontend:

```
cd frontend
npm run dev
```

3. Acesse a aplicação em `http://localhost:3000`

## 📚 Funcionalidades

- Upload de arquivos PDF
- Extração de conteúdo de PDFs
- Visualização do conteúdo extraído
- Formatação do texto extraído para melhor legibilidade

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Adelino Masioli - [adelinomasioli@gmail.com](mailto:adelinomasioli@gmail.com)

Link do Projeto: [https://github.com/adelino-masioli/pdf-extractor](https://github.com/adelino-masioli/pdf-extractor)

##

# PDF Extractor 🇬🇧 🇺🇸

PDF Extractor is a web application that allows users to upload PDF files and extract their content. The project is divided into two main parts: frontend and backend.

## 🚀 Project Structure

```plaintext
pdf-extractor/
│
├── frontend/    # React/Next.js Application
│
└── backend/     # API Node.js
```

## 🛠️ Technologies Used

### Frontend

- React.js
- Next.js
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- Multer (for file uploads)
- pdf-parse (for PDF content extraction)

## 🔧 Installation and Configuration

### Prerequisites

- Node.js (version 14 or higher)
- npm ou yarn

### Installation Steps

1. Clone the repository:

```
git clone git@github.com:adelino-masioli/pdf-extractor.git
cd pdf-extractor
```

2. Install frontend dependencies:
   cd frontend
   npm install

3. Install backend dependencies:
   cd ../backend
   npm install

4. Configure environment variables:

- In the frontend, create a .env.local file and add:

```

NEXT_PUBLIC_API_URL=http://localhost:3001

```

- In the backend, create a .env file and add:

```

PORT=3001

```

## 🚀 Running the Project

1. Start the backend:

```
cd backend
npm run dev
```

2. In another terminal, start the frontend:

```
cd frontend
npm run dev
```

3. Access the application at `http://localhost:3000`

## 📚 Features

- PDF file upload
- PDF content extraction
- Extracted content visualization
- Formatting of extracted text for better readability

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 📞 Contact

Adelino Masioli - [adelinomasioli@gmail.com](mailto:adelinomasioli@gmail.com)

Project Link: [https://github.com/adelino-masioli/pdf-extractor](https://github.com/adelino-masioli/pdf-extractor)
