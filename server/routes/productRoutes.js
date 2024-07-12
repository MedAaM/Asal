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
const requireAuth = require("../middlewares/requireUserAuth");
const requireAdminAuth = require("../middlewares/requireAdminAuth");

const router = express.Router();

router.post("/", upload, createProduct);
router.get("/", listProducts);


router.get("/search", searchProducts);


router.get("/getbyid/:productId", getProductById);


router.put("/:id",requireAdminAuth, updateProduct);


router.delete("/:id",requireAdminAuth, deleteProductById);


router.post("/:id/reviews",requireAuth, addReviewToProduct);


router.post("/:id/questions",requireAuth, addQuestionToProduct);
module.exports = router;
