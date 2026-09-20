const productModel = require('../model/productModel');
const UserModel = require('../model/userModel');


// Create a new product/upload a product

const uploadProduct = async (req, res) => {
    try {
        const getUserID = await UserModel.findById(req.params.userId);  
        const { name, description, price, stock, category, quantity, image } = req.body;

    if (!getUserID) {
        return res.status(404).json({ message: 'User not found' });
    }
        const product = await productModel.create({
            name,
            description,
            price,
            stock,
            category,
            quantity,
            image
        });
     await getUserID.products.push(product._id);
     await getUserID.save();
    return res.status(201).json({ message: 'Product uploaded successfully', product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const getAll = await productModel.find();
        return res.status(200).json({ message: 'All products retrieved successfully', getAll });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { uploadProduct, getAllProducts };