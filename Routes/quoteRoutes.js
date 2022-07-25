const express = require("express");
const quoteModel = require("../Models/quote");
const app = express();



app.post('/quote/add', async (req, res) => {

    try {
        let response;
        let quoteData = new quoteModel({
            quote: req.body.quote,
            author: req.body.author,
        })
        quoteData.save();
        response = {
            'result': "Success"
        };
        res.send(response);

    } catch (err) {
        error = {
            'error': 'Unable to save'
        }
        res.status(500).send(error);
    }
});

app.get('/quote/getAll', async (req, res) => {
    try {
        let response;
        let quoteData = await quoteModel.find().select({
            'quote': 1,
            'author': 1,
            '_id': 0
        });
        console.log(quoteData)
        if (quoteData.length <= 0) {
            response = {
                'result': "No quote found",
            };
            res.send(response);
        } else {
            res.send(quoteData);
        }

    } catch (err) {
        error = {
            'error': 'Unable to connect'
        }
        res.status(500).send(error);
    }
});
module.exports = app;