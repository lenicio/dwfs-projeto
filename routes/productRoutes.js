const express = require("express");
const router = express.Router();
const products = require("../controllers/product");

router.get("/produtos", products.list);
router.post("/produtos", products.create);
router.get("/produtos/:id", products.read);
router.put("/produtos/:id", products.update);
router.delete("/produtos/:id", products.delete);

module.exports = router;
