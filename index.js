import express from "express"
import path from 'path'
import bodyParser from 'body-parser'
import router from './src/router/goodsRoute.js'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    
})
app.use('/goods', goods.router);
app.use('/auth', auth.router);

app.listen(3000, () => {
    console.log('Conneted 3000 port');
});