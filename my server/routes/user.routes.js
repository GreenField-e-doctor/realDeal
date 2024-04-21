const express = require('express');
const router = express.Router();
const { getAll, getOne, addPost, deleteOne } = require('../controllors/post');
const { register, login, UpdateS } = require('../controllors/auth');
const UserController = require('../controllors/user');

// Post routes
router.get('/posts', getAll);
router.get('/posts/:id', getOne);
router.post('/posts', addPost);
router.delete('/posts/:id', deleteOne);

// User routes
router.get('/allusers', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.addUser);
router.put('/users/:id', UserController.updateUserById);

router.delete('/users/:id', UserController.deleteUserById);

// Auth routes
router.post('/login', login);
router.post('/register', register);
router.put('/users/:id', UpdateS);

module.exports = router;
