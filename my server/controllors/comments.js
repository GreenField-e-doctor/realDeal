const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // Add a new `comment` record
    getComments: async function(req, res) {
        try {
            const comments = await prisma.comment.findMany();
            res.status(200).json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching comments.' });
        }
    },
    addComment: async function(req, res) {
        try {
            const comment = await prisma.comment.create({
                data: req.body,
            });
            res.status(201).json(comment);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding comment.' });
        }
    },

    // Delete a `comment` record based on the `id` parameter
    deleteOne: async function(req, res) {
        try {
            const commentId = parseInt(req.params.id);
            const deletedComment = await prisma.comment.delete({
                where: { id: commentId },
            });

            res.status(200).json({ msg: 'comment deleted successfully.', comment: deletedComment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error deleting comment.' });
        }
    },
};
