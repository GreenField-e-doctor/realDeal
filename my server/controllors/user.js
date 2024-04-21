const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getAllUsers: async function(req, res) {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ msg: 'Error fetching users.' });
        }
    },

    getUserById: async function(req, res) {
        try {
            const userId = parseInt(req.params.id);
            const user = await prisma.user.findUnique({
                where: { id: userId }
            });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ msg: 'User not found' });
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ msg: 'Error fetching user.' });
        }
    },

    addUser: async function(req, res) {
        try {
            const { name, image } = req.body;

            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    image: image
                }
            });

            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    },

    updateUserById: async function(req, res) {
        try {
            const userId = parseInt(req.params.id);
            const { name, image } = req.body;

            const updatedUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    name: name,
                    image: image
                }
            });

            res.status(200).json({ message: 'User updated successfully', user: updatedUser });
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ msg: 'Error updating user.' });
        }
    },

    deleteUserById: async function(req, res) {
        try {
            const userId = parseInt(req.params.id);
            const deletedUser = await prisma.user.delete({
                where: { id: userId }
            });

            res.status(200).json({ msg: 'User deleted successfully.', user: deletedUser });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ msg: 'Error deleting user.' });
        }
    }
};
