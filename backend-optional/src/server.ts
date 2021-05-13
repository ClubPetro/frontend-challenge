import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import './database';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// Global exception handling
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error.',
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: 'error.',
      message: 'internal server error.',
    });
  },
);

app.listen(3333, () => {
  console.log('server started!');
});
