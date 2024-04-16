const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // Select all records in the `explore` table
    selectAll: async (req, res) => {
        try {
            const explore = await prisma.explore.findMany();
            res.status(200).json(explore);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching explore records.' });
        }
    },
    
    // Select one record in the `explore` table based on id
    selectOne: async (req, res) => {
        try {
            const explore = await prisma.explore.findUnique({
                where: { id: parseInt(req.params.id) }
            });

            if (!explore) {
                return res.status(404).json({ msg: 'Record not found.' });
            }

            res.status(200).json(explore);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching explore record.' });
        }
    },
    
    // Add a new record to the `explore` table
    addOne: async (req, res) => {
        try {
            const explore = await prisma.explore.create({
                data: req.body
            });
            res.status(201).json(explore);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding new record.' });
        }
    },
    
    // Delete a record from the `explore` table based on id
    deleteOne: async (req, res) => {
        try {
            const explore = await prisma.explore.delete({
                where: { id: parseInt(req.params.id) }
            });
            res.status(200).json({ msg: 'Record deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error deleting record.' });
        }
    },
    
    // Update a record in the `explore` table based on id
    UpdateOne: async (req, res) => {
        try {
            const explore = await prisma.explore.update({
                where: { id: parseInt(req.params.id) },
                data: req.body
            });
            res.status(200).json(explore);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error updating record.' });
        }
    }
};
