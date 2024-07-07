const upload = require("../config/multerConfig");
const Product = require("../models/productModel");

const createProduct = async (req, res) => {
    try {
      const {
        name,
        slug,
        productId,
        unit,
        unitValue,
        price,
        discount,
        description,
        shortDescription,
        type,
        image,
        gallery,
        categories,
        subcategories,
        childCategories,
        brand,
        currency,
        trending,
        new: isNew,
        bestSelling,
        quantity,
        sku,
        colors,
        attributes,
        variants,
        attributeIndex,
        seo,
        review,
        question,
        vat,
        tax,
      } = req.body;
  
      const newProduct = new Product({
        name,
        slug,
        productId,
        unit,
        unitValue,
        price,
        discount,
        description,
        shortDescription,
        type,
        image,
        gallery,
        categories,
        subcategories,
        childCategories,
        brand,
        currency,
        trending,
        new: isNew,
        bestSelling,
        quantity,
        sku,
        colors,
        attributes,
        variants,
        attributeIndex,
        seo,
        review,
        question,
        vat,
        tax,
      });
  
      const savedProduct = await newProduct.save();
  
      res.status(201).json(savedProduct); 
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product' });
    }
  };

module.exports = { createProduct };
