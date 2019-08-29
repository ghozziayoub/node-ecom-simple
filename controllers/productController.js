//importing 3rd part libs
const express = require('express');

//declare my app
const app = express();

//my WSs
app.post('/add', (req, res) => {
    res.status(200).send({ message: 'product added success' });
})

app.get('/list', (req, res) => {
    res.status(200).send({ message: 'product success' });
})

app.get('/one/:id', (req, res) => {
    res.status(200).send({ message: 'product success' });
})

app.put('/update', (req, res) => {
    res.status(200).send({ message: 'product updated success' });
})
app.delete('/delete', (req, res) => {
    res.status(200).send({ message: 'product deleted success' });
})




//exporting my WSs
module.exports = app;