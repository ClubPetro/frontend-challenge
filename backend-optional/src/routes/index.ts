import express from 'express';

import countriesRouter from './countries.routes';

const routes = express();

routes.use('/countries', countriesRouter);

export default routes;
