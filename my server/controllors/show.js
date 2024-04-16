const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    selectAll: async function (req, res) {
        try {
            const shows = await prisma.shows.findMany();
            res.status(200).json(shows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    selectOne: async function (req, res) {
        try {
            const show = await prisma.shows.findUnique({
                where: { id: parseInt(req.params.id) },
            });
            if (show) {
                res.status(200).json(show);
            } else {
                res.status(404).json({ message: 'Show not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    addOne: async function (req, res) {
        try {
            const show = await prisma.shows.create({
                data: req.body,
            });
            res.status(201).json(show);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    deleteOne: async function (req, res) {
        try {
            const show = await prisma.shows.delete({
                where: { id: parseInt(req.params.id) },
            });
            res.status(200).json(show);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    updateOne: async function (req, res) {
        try {
            const show = await prisma.shows.update({
                where: { id: parseInt(req.params.id) },
                data: req.body,
            });
            res.status(200).json(show);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    searchProducts: async function (req, res) {
        try {
            const { search } = req.params;
            const shows = await prisma.shows.findMany({
                where: {
                    name: {
                        contains: search,
                        mode: 'insensitive', // Case-insensitive search
                    },
                },
            });
            res.status(200).json(shows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
};
