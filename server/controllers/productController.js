const upload = require("../config/multerConfig");
const Product = require("../models/productModel");
const Attribute = require("../models/attributeModel");
const customId = require("custom-id-new");
const { convertToSlug } = require("../utils/functions");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      unit,
      unit_val,
      main_price,
      sale_price,
      description,
      short_description,
      type,
      category,
      subcategory,
      brand,
      qty,
      trending,
      new_product,
      best_selling,
      sku,
      color,
      attribute,
      selectedAttribute,
      variant,
      displayImage,
      galleryImages,
      seo,
      childCategory,
      vat,
      tax,
    } = req.body; 
    
    const random = "P" + customId({ randomLength: 4, upperCase: true });
    const categories = JSON.parse(category);
    const subcategories = JSON.parse(subcategory);
    const childCategories = JSON.parse(childCategory);
    const image = JSON.parse(displayImage);
    const gallery = JSON.parse(galleryImages);
    const colors = JSON.parse(color);
    const attributes = JSON.parse(attribute);
    const variants = JSON.parse(variant);
    const seoData = JSON.parse(seo);
    
    const discount = ((main_price - sale_price) / main_price * 100).toFixed(1);

    let productData = {
      name: name.trim(),
      slug: convertToSlug(name, true),
      productId: random,
      unit: unit.trim(),
      unitValue: unit_val.trim(),
      price: main_price,
      discount,
      shortDescription: short_description.trim(),
      description,
      type,
      image,
      gallery,
      categories,
      subcategories,
      childCategories,
      brand: brand.trim(),
      trending: trending ? true : false,
      new: new_product ? true : false,
      bestSelling: best_selling ? true : false,
      seo: seoData,
      tax,
      vat,
    };
    
    if (type === "simple") {
      productData.quantity = qty;
      productData.sku = sku;
    } else {
      productData.colors = colors;
      productData.attributes = attributes;
      productData.variants = variants;
      productData.attributeIndex = selectedAttribute;
    }

    const savedProduct = await new Product(productData).save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.error(`Error fetching product with ID ${req.params.productId}:`, error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const updateProduct = async (productId, updatedFields) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedFields, { new: true });
    return updatedProduct;
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
    throw error;
  }
};

const deleteProductById = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    throw error;
  }
};

const listProducts = async (req, res) => {
  try {
    const criteria = req.query; // Adjust this line if you have specific criteria to filter
    console.log('Listing products with criteria:', criteria);

    const products = await Product.find(criteria).lean(); // Use .lean() to get plain JavaScript objects
    console.log('Found products:', products);

    res.status(200).json(products);
  } catch (error) {
    console.error('Error listing products:', error);
    res.status(500).json({ error: 'Failed to list products' });
  }
};


const searchProducts = async (req, res) => {
  try {
    // Extract search query parameters
    const {
      search,
      minPrice,
      maxPrice,
      categories,
      subcategories,
      brand,
      trending,
      new: isNew,
      bestSelling,
      minRating,
      maxRating,
      colors,
      unit,
      unitValue,
      discount,
      currency,
    } = req.query;

    // Construct the search criteria
    let criteria = {};

    if (search) {
      criteria.$text = { $search: search };
    }

    if (minPrice) {
      criteria.price = { ...criteria.price, $gte: parseFloat(minPrice) };
    }

    if (maxPrice) {
      criteria.price = { ...criteria.price, $lte: parseFloat(maxPrice) };
    }

    if (categories) {
      criteria.categories = { $in: categories.split(',') };
    }

    if (subcategories) {
      criteria.subcategories = { $in: subcategories.split(',') };
    }

    if (brand) {
      criteria.brand = brand;
    }

    if (trending !== undefined) {
      criteria.trending = trending === 'true';
    }

    if (isNew !== undefined) {
      criteria.new = isNew === 'true';
    }

    if (bestSelling !== undefined) {
      criteria.bestSelling = bestSelling === 'true';
    }

    if (minRating) {
      criteria['review.rating'] = { ...criteria['review.rating'], $gte: parseFloat(minRating) };
    }

    if (maxRating) {
      criteria['review.rating'] = { ...criteria['review.rating'], $lte: parseFloat(maxRating) };
    }

    if (colors) {
      criteria.colors = { $in: colors.split(',') };
    }

    if (unit) {
      criteria.unit = unit;
    }

    if (unitValue) {
      criteria.unitValue = unitValue;
    }

    if (discount !== undefined) {
      criteria.discount = { $gte: parseFloat(discount) };
    }

    if (currency) {
      criteria.currency = currency;
    }

    // Log the search criteria for debugging
    console.log('Searching products with criteria:', criteria);

    // Perform the search on the Product collection
    const products = await Product.find(criteria);

    // Return the search results
    res.status(200).json(products);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Failed to search products' });
  }
};








const addReviewToProduct = async (productId, reviewData) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    product.review.push(reviewData);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    console.error(`Error adding review to product with ID ${productId}:`, error);
    throw error;
  }
};

const addQuestionToProduct = async (productId, questionData) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    product.question.push(questionData);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    console.error(`Error adding question to product with ID ${productId}:`, error);
    throw error;
  }
};

const getProducts = async (req, res) => {
  try {
    const { pageNumber = 1, pageSize = 9 } = req.query;

    const skip = (pageNumber - 1) * pageSize;

    const products = await Product.find()
      .skip(skip)
      .limit(Number(pageSize));

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
  deleteProductById,
  listProducts,
  searchProducts,
  addReviewToProduct,
  addQuestionToProduct,
  createProduct
};