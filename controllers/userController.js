//importing 3rd part libs
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//import models
const { User } = require('./../models/user');

//import config
const { mongoose } = require('./../db/config');

//declare my app
const app = express();

//my WSs
app.post('/register', (req, res) => {
    //1 recuperation data
    let data = req.body;
    //2 hashage password
    data.password = bcrypt.hashSync(data.password, 10);
    //3 creation objet <= data
    let user = new User({
        firstname: data.firstname,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
        password: data.password
    });
    //4 enregistrer objet bd
    //5 envoyer resultat vers le FE

    user.save().then((userFromDb) => {
        if (!userFromDb) {
            res.status(400).send({ message: 'register failed !' })
        }

        res.status(200).send({ message: 'register success' })

    }).catch((error) => {
        res.status(400).send({ message: 'register failed : ' + error })
    });
})

app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({ email }).then((user) => {
        if (!user) {
            res.status(404).send({ message: 'incorrect email' });
        }
        let compare = bcrypt.compareSync(password, user.password);
        if (!compare) {
            res.status(404).send({ message: 'incorrect password' });
        }
        let token = jwt.sign({ _id:user._id, role: user.role }, 'ecom');
        res.status(200).header({ token }).send({ message: 'login success' })
    }).catch((error) => {
        res.status(400).send({ message: 'login failed : ' + error })
    });
})

app.post('/profil', (req, res) => {
    res.status(200).send({ message: 'profil show success' });
})

app.put('/profil', (req, res) => {
    res.status(200).send({ message: 'profil update success' });
})

//exporting my WSs
module.exports = app;