const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/produtos.json");

const readJSON = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const writeJSON = (data) => {
  const json_data = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, json_data, "utf-8");
};

module.exports = { readJSON, writeJSON };
