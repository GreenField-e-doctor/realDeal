const express = require("express");
const router = require('express').Router();



const {addComment,deleteOne,getComments}=require('../controllors/comments')




router.get("/",getComments);
router.post("/addComment",addComment);
router.delete("/:id",deleteOne);


module.exports = router;
