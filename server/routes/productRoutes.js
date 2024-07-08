const express = require("express");
const { createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProductById,
    listProducts,
    searchProducts,
    addReviewToProduct,
    addQuestionToProduct } = require("../controllers/productController");
const upload = require("../config/multerConfig");

const router = express.Router();

router.post("/", upload, createProduct);
router.get("/", listProducts);


router.get("/search", searchProducts);


router.get("/getbyid/:productId", getProductById);


router.put("/:id", updateProduct);


router.delete("/:id", deleteProductById);


router.post("/:id/reviews", addReviewToProduct);


router.post("/:id/questions", addQuestionToProduct);
module.exports = router;
