const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // Fetch all products
    selectAll: async function(req, res) {
        try {
            const products = await prisma.product.findMany();
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching products.' });
        }
    },

    // Fetch a single product by its ID
    selectOne: async function(req, res) {
        try {
            const productId = parseInt(req.params.id);
            const product = await prisma.product.findUnique({
                where: { id: productId },
            });

            if (!product) {
                return res.status(404).json({ msg: 'Product not found.' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching product.' });
        }
    },

    // Add a new product
    addOne: async function(req, res) {
        try {
            const product = await prisma.product.create({
                data: req.body,
            });
            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding product.' });
        }
    },

    // Delete a product by its ID
    deleteOne: async function(req, res) {
        try {
            const productId = parseInt(req.params.id);
            const deletedProduct = await prisma.product.delete({
                where: { id: productId },
            });

            res.status(200).json({ msg: 'Product deleted successfully.', product: deletedProduct });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error deleting product.' });
        }
    },

    // Update a product by its ID
    UpdateOne: async function(req, res) {
        try {
            const productId = parseInt(req.params.id);
            const updatedProduct = await prisma.product.update({
                where: { id: productId },
                data: req.body,
            });

            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error updating product.' });
        }
    },

    // Search for products by name
    searchProducts: async function(req, res) {
        try {
            const searchQuery = req.params.search;
            const products = await prisma.product.findMany({
                where: {
                    name: {
                        contains: searchQuery,
                        mode: 'insensitive',
                    },
                },
            });
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error searching for products.' });
        }
    },
};
