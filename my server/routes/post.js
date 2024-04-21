// const express = require("express");
const router = require('express').Router();



const {getAll, getOne, addPost, deleteOne}=require('../controllors/post')




router.get("/",getAll);

router.post("/",addPost);
router.delete("/:id",deleteOne);



module.exports = router;
