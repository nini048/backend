require ('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

configViewEngine(app)
app.use('/',webRouters)

app.listen(port,hostname, () => {
    console.log(`listening on port ${port}`);
})
app 