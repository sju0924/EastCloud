import express from "express"
import path from 'path'
import bodyParser from 'body-parser'
import {router} from './router/goodsRoute';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/goods',router);

app.listen(3000, () => {
    console.log('Conneted 3000 port');
});