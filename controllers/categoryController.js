//importing 3rd part libs
const express = require('express');

//import models
const { Category } = require('./../models/category');

//import config
const { mongoose } = require('./../db/config');

//declare my app
const app = express();

//my WSs
app.post('/add', (req, res) => {
    let data = req.body;

    let catetgory = new Category({
        name: data.name
    })

    catetgory.save().then((cat) => {
        res.status(200).send({ message: 'cat add success' });
    }).catch((err) => {
        res.status(200).send({ message: 'cat add error : ' + err });
    });
})

app.get('/all', (req, res) => {

    Category.find().then((categories) => {
        res.status(200).send(categories);
    }).catch((err) => {
        res.status(200).send({ message: 'cat add error : ' + err });
    });
})


app.get('/one/:id', (req, res) => {
    let _id = req.params.id;

    Category.findOne({ _id }).then((category) => {
        res.status(200).send(category);
    }).catch((err) => {
        res.status(200).send({ message: 'cat add error : ' + err });
    });
})

app.put('/update', (req, res) => {
    console.log(req.body);

    res.status(200).send('ok');
});


//exporting my WSs
module.exports = app;