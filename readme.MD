# 🌐 API de Produtos Node.js

Esta é uma API RESTful para gerenciamento de produtos construída com Node.js e Express. Ela permite criar, ler, atualizar e deletar informações de produtos armazenadas em um arquivo JSON.

## 📂 Estrutura de Pastas

- `/controllers` - Contém a lógica de controle para as operações da API.
- `/data` - Armazena o arquivo `products.json` com os dados dos produtos.
- `/routes` - Define as rotas da API.

## 🚀 Começando

Para iniciar a API, certifique-se de ter Node.js instalado em sua máquina e execute:

```
npm install
npm start
```

## 🛣️ Rotas da API

- `GET /produtos` - Lista todos os produtos.
- `POST /produtos` - Cria um novo produto.
- `GET /produtos/:id` - Obtém um produto pelo ID.
- `PUT /produtos/:id` - Atualiza um produto pelo ID.
- `DELETE /produtos/:id` - Deleta um produto pelo ID.

## 📝 Manipulando o JSON

A pasta `data` contém um arquivo `products.json`. A API lê e grava neste arquivo para persistir as informações dos produtos.

## 🖥️ Exemplo de Uso

Para adicionar um novo produto:

```javascript
fetch("http://localhost:3000/produtos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    descricao: "Batata Maior Palha 300gr",
    valor: 15.2,
    marca: "Chipps",
  }),
});
```
