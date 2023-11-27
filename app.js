const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use("/api", productRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
