const express = require("express");
const productModel = require("../Models/product");
const app = express();

app.post('/product/add', async (req, res) => {

    try {
        let response;
        let productData = new productModel({
            productName: req.body.productName,
            price: req.body.price,
        })
        productData.save();
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
app.get('/product/getAll', async (req, res) => {
    try {
        let response;
        let productData = await productModel.find().select({
            'productName': 1,
            'price': 1,
            '_id': 0
        });
        console.log(productData)
        if (productData.length <= 0) {
            response = {
                'result': "No product found",
            };
            res.send(response);
        } else {
            res.send(productData);
        }

    } catch (err) {
        error = {
            'error': 'Unable to connect'
        }
        res.status(500).send(error);
    }
});
module.exports = app;