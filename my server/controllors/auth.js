
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

module.exports = {
    // Register a new ///////user
    register: async (req, res) => {
        try {
            const {
                name,
                password,
                email,
                role,
                image
            } = req.body;

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ msg: 'User already exists.' });
            }

            // Hash the password
            const rounds = 10;
            const passwordHash = await bcrypt.hash(password, rounds);

            // Create new user
            const newUser = await prisma.user.create({
                data: {
                    name,
                    password: passwordHash,
                    email,
                    role,
                    image
                }
            });
            console.log('New user created:', newUser)
            // Send response with newly created user
            const userWithoutPassword = { ...newUser, password: undefined };
            res.status(201).json(userWithoutPassword);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error registering user.' });
        }
    },

    // Login a user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Find user by email
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist.' });
            }

            // Compare password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid password.' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
           
            console.log('User logged in successfully:', user.email);

            // Send response with token and user details
            const userWithoutPassword = { ...user, password: undefined };
            res.status(200).json({ token, user: userWithoutPassword });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error logging in user.' });
        }
    },

    // Update user information
    UpdateS: async (req, res) => {
        try {
            // Update user information based on ID
            const user = await prisma.user.update({
                where: { id: parseInt(req.params.id) },
                data: req.body
            });

            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error updating user.' });
        }
    }
};
