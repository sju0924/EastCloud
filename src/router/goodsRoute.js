var express = require('express');
var Controller = require('../goods/Controller/goodsController')

const router = express.Router();


router.get('', Controller.showgoods);
//router.get('/:id',)
router.post('',Controller.creategoods);

exports.router = router