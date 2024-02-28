const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/Usercontroller')

router.get('/', UserController.index)
router.post('/login', UserController.login)
router.post('/show', UserController.show)
router.post('/adduser', UserController.adduser)
router.post('/update', UserController.update)
router.post('/delete', UserController.destroy)

module.exports = router