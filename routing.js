//importing 3rd part libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//importing my controllers
const user = require('./controllers/userController');
const category = require('./controllers/categoryController');


//declare my app
const app = express();

//config myapp
app.use(bodyParser.json());
app.use(cors({
    exposedHeaders: ['Content-Length', 'token'],
}));

app.use('/user', user);
app.use('/category', category);

//callback function
app.listen(3000, () => console.log('server started on port 3000'))