const connection = require("../config/database");
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  connection.query(
    `INSERT INTO 
          Users (email, name, city)
           VALUES (?, ?,?);`,
    [email, name, city],
    function (err, results) {
      if (err) throw err;
         console.log(results);
         res.send('create user success')
    }
  );
};
const getABC = (req, res) => {
  res.send("Hello World & abc");
};
const getNini = (req, res) => {
  res.render("sample.ejs");
};

module.exports = { getHomePage, getABC, getNini, postCreateUser };
