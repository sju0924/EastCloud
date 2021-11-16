const express = require('express');
var path = require('path');
var goods = require('./src/router/goodsRoute.js')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/goods', goods.router);

app.listen(3000, () => {
    console.log('Conneted 3000 port');
});