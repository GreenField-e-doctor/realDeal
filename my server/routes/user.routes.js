
const express = require('express');
const router = express.Router();
const {register,login,UpdateS} = require('../controllors/auth');

router.put('/:id', UpdateS);
router.post('/', login);
router.post('/register', register);


module.exports = router;
