const {getHomePage, getABC, getNini} = require ('../controllers/homeControllers')
const express = require('express')
const router = express.Router()
router.get('/',getHomePage)


router.get('/abc',getABC)
router.get('/nini',getNini)
module.exports = router;