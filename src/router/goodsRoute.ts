import express from 'express'
import { creategoods, showgoods,showgoods_byid } from '../goods/Controller/goodsController';

const goods_router = express.Router();


goods_router.get('', showgoods);
goods_router.get('/:id',showgoods_byid);
goods_router.post('',creategoods);

export default goods_router;