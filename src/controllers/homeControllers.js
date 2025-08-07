const getHomePage = (req, res) => {
     res.send('Hello World & nini')
}
const getABC = (req, res) => {
     res.send('Hello World & abc')
}
const getNini = (req, res) => {
      res.render('sample.ejs')
}

module.exports = {getHomePage, getABC, getNini}