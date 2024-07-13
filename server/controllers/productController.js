const upload = require("../config/multerConfig");
const Product = require("../models/productModel");
const Attribute = require("../models/attributeModel");

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

    // Validate attribute references
    if (attributes && attributes.length > 0) {
      for (const attributeId of attributes) {
        const attributeExists = await Attribute.findById(attributeId);
        if (!attributeExists) {
          return res.status(400).json({ error: `Attribute with ID ${attributeId} does not exist` });
        }
      }
    }

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
