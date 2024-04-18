const express = require('express');
const { addComment, getCommentsByPost, deleteComment } = require('../controllors/comment');
const router = express.Router();

router.post('/', addComment);
router.get('/:postId', getCommentsByPost);
router.delete('/:id', deleteComment);  

module.exports = router;
