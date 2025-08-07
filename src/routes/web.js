const express = require('express')
const router = express.Router()
router.get('/', (req, res) => { res.send('Hello World & nini') })
router.get('/abc', (req, res) => { res.send('check abc') })
router.get('/nini', (req, res) => {
    // res.send('<h1>check ABC</h1>')
    res.render('sample.ejs')
})
module.exports = router;