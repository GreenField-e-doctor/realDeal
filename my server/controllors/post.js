const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getAll: async function(req, res) {
        try {
            const posts = await prisma.post.findMany({
                select: {
                    
                    id  :   true,            
                    title  : true, 
                    content  :true,
                    image:true,
                    // createdAt: true,
                     comments: {
                        select:{
                            id :true,
                             content:true,
                             user:true, 
                        }
                     },
                     user: true,   
                        
                    
                }
            });
            res.send(posts);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
            res.status(500).json({ msg: 'Error fetching posts.' });
        }
    },

    getOne: async function(req, res) {
        try {
            const id = parseInt(req.params.id);
            const post = await prisma.post.findUnique({
                where: { id }
            });
            if (post) {
                res.json(post);
            } else {
                res.status(404).json({ msg: 'Post not found' });
            }
        } catch (error) {
            console.error('Failed to fetch the post:', error);
            res.status(500).json({ msg: 'Error fetching the post.' });
        }
    },
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
