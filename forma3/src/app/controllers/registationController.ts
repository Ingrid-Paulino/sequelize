import { Request, Response } from 'express';

import RegisterService from '../services/registrationServices';

const getAlll2 = async (_req: Request, res: Response) => {
  res.send('Começando projeto');
};

const getAll = async (_req: Request, res: Response) => {
  const result = await RegisterService.getAll();
  return res.status(200).json(result);
};

export default {
  getAll,
  getAlll2
};
