const userModel = require("../model/userModel.js");

//CRUD Operations

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userModel.create({ name, email, password });
    return res.status(201).json({
        message: "User created successfully",
        data : newUser
    });
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//General GET
const getAllUsers = async (req, res) => {
    try {  
       const getAllUsers = await userModel.find();
       return res.status(200).json({
        message: "All users fetched successfully",
        data : getAllUsers
    }
    ); 
    }catch (error) {
    return res.status(500).json({ message: error.message });
    }
}

//Single GET
const getSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User fetched successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// UPDATE user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(id, { name, email, password }, { new: true });
       /*if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }*/
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// DELETE user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);
       if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
};
