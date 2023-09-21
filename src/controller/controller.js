const express = require('express');
const router = express.Router();
const UserService = require('../service/userService')

router.post('/insertdata',UserService.insertUserData)
router.get('/getuserdata',UserService.getData)
router.put('/updateuser/:id',UserService.updateUser)
router.delete('/deleteuser/:id',UserService.deleteData)

module.exports = router;