const express = require('express');
const router = express.Router();
const { getUser, addUser, updateUser, deleteUser } = require('../controllers/userControllers');

router.get('/user', getUser);

router.post('/adduser', addUser);

router.put('/updateuser/:id', updateUser);

router.delete('/deleteuser/:id', deleteUser);

module.exports = router;
