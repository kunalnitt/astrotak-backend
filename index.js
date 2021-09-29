const express = require('express');
var apiRoutes = require('./src/api-routes');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json());

mongoose.connect('mongodb+srv://testUser:!a7MXF4a!JWzzU9@cluster0.7gxtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;

var port = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send('Hello World!');
});

app.use('/api',apiRoutes);

app.listen(port, () => {
    console.log("App listening on port"+ port);
});


