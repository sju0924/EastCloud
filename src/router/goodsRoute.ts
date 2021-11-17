import express from 'express'
import { creategoods, showgoods,showgoods_byid } from '../goods/Controller/goodsController';

const router = express.Router();


router.get('', showgoods);
router.get('/:id',showgoods_byid);
router.post('',creategoods);

export { router }