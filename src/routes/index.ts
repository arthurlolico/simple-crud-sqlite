import { productRouter } from './products';
import Router, { Application } from 'express';

export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/products', productRouter);

    app.use('/api/v1',apiRouter);
}