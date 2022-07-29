import express from 'express';
require('express-async-errors');
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import routes from '../app/routes';
// const registerController = require('../app/controllers/registationController')

const api = express();

api.use(express.json());

api.use(routes)

api.use(errorHandlerMiddleware);

api.listen("3008", () => {
  console.log(`running on port 3008`);
})

export default api;