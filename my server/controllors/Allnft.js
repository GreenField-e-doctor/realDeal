const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    /**
     * Retrieve all NFTs based on query parameters
     */
    selectAll: async function(req, res) {
        try {
            const { status, genre } = req.query;
            const whereClause = {};

            if (status) {
                whereClause.status = status;
            }
            if (genre) {
                whereClause.genre = genre;
            }

            // Use Prisma Client to fetch all NFTs with the specified conditions
            const allnft = await prisma.nft.findMany();

            res.status(200).send(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching NFTs');
        }
    },

    /**
     * Retrieve one NFT based on its Uncommon Rare value
     */
    selectOne: async function(req, res) {
        try {
            // Use Prisma Client to fetch one NFT with the specified Uncommon Rare value
            const allnft = await prisma.nft.findUnique({
                where: { UncommenRare: parseInt(req.params.UncommenRare) }
            });

            if (!allnft) {
                return res.status(404).send('NFT not found');
            }

            res.status(200).json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching NFT');
        }
    },

    /**
     * Add a new NFT to the database
     */
    addOne: async function(req, res) {
        try {
            // Use Prisma Client to create a new NFT
            const allnft = await prisma.nft.create({
                data: req.body
            });

            res.status(201).send(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating NFT');
        }
    },

    /**
     * Delete an NFT based on its ID
     */
    deleteOne: async function(req, res) {
        try {
            // Use Prisma Client to delete an NFT with the specified ID
            const allnft = await prisma.nft.delete({
                where: { id: parseInt(req.params.id) }
            });

            if (!allnft) {
                return res.status(404).send('NFT not found');
            }

            res.json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting NFT');
        }
    },

    /**
     * Update an NFT based on its ID
     */
    UpdateOne: async function(req, res) {
        try {
            // Use Prisma Client to update an NFT with the specified ID
            const allnft = await prisma.nft.update({
                where: { id: parseInt(req.params.id) },
                data: req.body
            });

            res.status(201).send(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error updating NFT');
        }
    }
};
