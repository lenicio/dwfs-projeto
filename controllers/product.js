const { readJSON, writeJSON } = require("../data/produtos");

exports.list = (req, res) => {
  const produtos = readJSON();
  res.json(produtos);
};

exports.create = (req, res) => {
  const produtos = readJSON();
  let produto = req.body;
  const lastId = produtos[produtos.length - 1].id;
  produto.id = lastId + 1;

  // Verifica se o body está vazio
  if (Object.keys(produto).length === 0) {
    return res.status(400).json({ message: "Requisição inválida" });
  }

  // Verifica se os campos obrigatórios estão presentes
  if (!produto.descricao || !produto.valor || !produto.marca) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios não preenchidos" });
  }

  produto = {
    id: produto.id,
    descricao: produto.descricao,
    valor: parseFloat(produto.valor),
    marca: produto.marca,
  };

  produtos.push(produto);
  writeJSON(produtos);
  res.json({ message: "Produto cadastrado com sucesso!", produto: produto });
};

exports.read = (req, res) => {
  const produtos = readJSON();
  const id = req.params.id;
  const produto = produtos.find((produto) => produto.id == id);

  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  res.json(produto);
};

exports.update = (req, res) => {
  const produtos = readJSON();
  const id = req.params.id;
  const produto = produtos.find((produto) => produto.id == id);

  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  const novoProduto = {
    id: id,
    descricao: req.body.descricao,
    valor: parseFloat(req.body.valor),
    marca: req.body.marca,
  };

  // Verifica se os campos obrigatórios estão presentes
  if (!novoProduto.descricao || !novoProduto.valor || !novoProduto.marca) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios não preenchidos" });
  }

  const index = produtos.indexOf(produto);
  produtos[index] = novoProduto;
  writeJSON(produtos);
  res.json({
    message: "Produto atualizado com sucesso!",
    produto: novoProduto,
  });
};

exports.delete = (req, res) => {
  const produtos = readJSON();
  const id = req.params.id;
  const produto = produtos.find((produto) => produto.id == id);

  if (!produto) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  const index = produtos.indexOf(produto);
  produtos.splice(index, 1);

  writeJSON(produtos);
  res.json({ message: "Produto removido com sucesso!", produto: produto });
};
