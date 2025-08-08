const {getHomePage, getABC, getNini, postCreateUser} = require ('../controllers/homeControllers')
const express = require('express')
const router = express.Router()
router.get('/',getHomePage)


router.get('/abc',getABC)
router.get('/nini',getNini)
router.post('/create-user', postCreateUser)
module.exports = router;