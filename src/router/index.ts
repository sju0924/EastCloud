import { Express } from 'express';
import goodsRouter from './goodsRoute';
import authRouter from './authRoute';

function init(app: Express) {
  //app.use('/goods', goodsRouter);
  app.use('/auth', authRouter);
}

export default init;
