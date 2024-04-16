const express = require("express");
const router = require('express').Router();



const {add,verify}=require("../controllors/payment")


router.post("/",add);
router.post("/:id",verify);


module.exports = router;