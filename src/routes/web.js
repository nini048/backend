const {getHomePage, getABC, getNini, postCreateUser, getCreatePage} = require ('../controllers/homeControllers')
const express = require('express')
const router = express.Router()
router.get('/',getHomePage)


router.get('/abc',getABC)
router.get('/nini',getNini)
router.post('/create-user', postCreateUser)
router.get('/create',getCreatePage)
module.exports = router;