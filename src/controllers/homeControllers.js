const connection = require("../config/database");
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = async (req, res) => {
     let {email, name, city } = req.body

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`, [email, name, city]
  );
  console.log("results: ", results);
  res.send('create success')
};
const getABC = (req, res) => {
  res.send("Hello World & abc");
};
const getNini = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getNini,
  postCreateUser,
  getCreatePage,
};
