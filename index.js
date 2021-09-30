const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const apiRoutes = require('./src/api-routes');

const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://testusr:rEPKYz1RutIkM4mt@cluster0.7gxtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var db = mongoose.connection;

var port = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send('Hello World!');
});

app.use('/api',apiRoutes);

app.listen(port, () => {
    console.log("App listening on port"+ port);
});


