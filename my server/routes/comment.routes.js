const express = require('express');
const { addCommentt, getCommentsByPost, deleteComment } = require('../controllors/comment');
const router = express.Router();

router.post('/', addCommentt);
router.get('/:postId', getCommentsByPost);
router.delete('/:id', deleteComment);  

module.exports = router;
