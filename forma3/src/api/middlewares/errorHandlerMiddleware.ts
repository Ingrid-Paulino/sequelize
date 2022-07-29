import { NextFunction, Request, Response } from 'express';
import { IError } from '../../app/interfaces/IError';


const errorHandlerMiddleware = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  if (err) return res.status(err.status).json({ error: err.message });

  return res.status(500).json({ error: { message: "err.message" } });
};

export default errorHandlerMiddleware;