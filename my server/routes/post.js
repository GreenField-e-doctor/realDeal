// const express = require("express");
const router = require('express').Router();



const {getAll, getOne, addPost, deleteOne}=require('../controllors/post')




router.get('/all', getAll);
router.get('/:id', getOne);
router.post("/",addPost);
router.delete("/:id",deleteOne);



module.exports = router;
