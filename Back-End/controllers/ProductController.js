import Product from "../models/productmodel.js"
import '../models/associations.js';

export const getAllProducts = async (req, res) => {

  try {
    const allProducts = await Product.findAll();
    if (allProducts) {
      res.status(200).json({ products: allProducts});
    } 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ message: 'Product not found with the given id', id });
    }
} catch (error) {
  res.status(500).json({ error: error.message })
}
}

export const createProduct = async (req, res) => {
  try {
    const { title, category, description, price, supplier, userId } = req.body;
    const product = await Product.create({ 
      title, 
      category, 
      description, 
      price, 
      supplier,
      userId
    });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const existingProduct = await Product.findByPk(id);

    if (!existingProduct) {
      return res.status(404).json({ error: 'No such product' });
    }

    await Product.update(req.body, { where: { id } });

    const updatedProduct = await Product.findByPk(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', error: message.error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const existingProduct = await Product.findByPk(id);

    if (!existingProduct) {
      return res.status(404).json({ error: 'No such product' });
    }

    await Product.destroy({ where: { id } });

    res.status(200).json(existingProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', error: error.message });
  }
};