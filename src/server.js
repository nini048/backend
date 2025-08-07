require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const mysql = require('mysql2')
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

configViewEngine(app)
app.use('/', webRouters)

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',

})
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log('>>result',results);
        console.log('>>>>fields',fields);

    }
)

app.listen(port, hostname, () => {
    console.log(`listening on port ${port}`);
})



