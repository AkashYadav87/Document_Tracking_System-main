const express  = require('express')
const router = express.Router()

const Authcontroller = require('../Controllers/AdminController')
const UserAuthcontroller = require('../Controllers/Usercontroller')
const authenticate = require('../middleware/authenticate')



router.post('/register',  Authcontroller.register)
router.post('/adminlogin',  Authcontroller.login)

router.post('/userlogin',  UserAuthcontroller.login)


module.exports = router