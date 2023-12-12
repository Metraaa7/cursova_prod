const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const db = require('./db');
const Contacts = require('./model.js');

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
   // optionSuccessStatus: 200
};

app.use(cors(corsOptions));
const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth()+1 < 10) ? '0' + date.getMonth() : date.getMonth()}-${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()} ${(date.getHours() < 10) ? '0' + date.getHours() : date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}:${(date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()}`;
}
app.post('/', async(req, res) => {
    try {
        const {name, number, address} = req.body;
        await Contacts.create({
            name,
            number,
            address,
            created_at: getDate()
        })
        res.json({message: 'OK'});
    } catch (e) {
        res.json(e);
    }
})

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection successful");
        app.listen(5000, () => console.log("Server started on port " + 5000));
    } catch (e) {
        console.log(e);
    }
}

startApp();

module.exports = app
