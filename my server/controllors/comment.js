const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add a comment to a post
exports.addCommentt = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;
    const comment = await prisma.commentPost.create({
      data: {
        content,
        postId,
        userId
      }
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: `Failed to add comment: ${error.message}` });
  }
};

// Get all comments for a specific post
exports.getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await prisma.commentPost.findMany({
      where: { postId: parseInt(postId) },
      include: { user: true }
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: `Failed to retrieve comments: ${error.message}` });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await prisma.commentPost.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Comment deleted successfully', comment });
    } catch (error) {
        res.status(500).json({ error: `Failed to delete comment: ${error.message}` });
    }
};
