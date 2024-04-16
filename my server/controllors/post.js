const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    // Add a new `post` record
    addPost: async function(req, res) {
        try {
            const post = await prisma.post.create({
                data: req.body,
            });
            res.status(201).json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding post.' });
        }
    },

    // Delete a `post` record based on the `id` parameter
    deleteOne: async function(req, res) {
        try {
            const postId = parseInt(req.params.id);
            const deletedPost = await prisma.post.delete({
                where: { id: postId },
            });

            res.status(200).json({ msg: 'Post deleted successfully.', post: deletedPost });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error deleting post.' });
        }
    },
};
