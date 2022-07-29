const express = require('express');
require('express-async-errors');
const errorHandlerMiddleware = require('../api/middlewares/errorHandlerMiddleware');
const registerController = require('../app/controllers/registationController')


const api = express();

api.use(express.json());


api.get('/', (_req, res) => {
  res.send('Começando projeto');
});

api.post('/register', async (req, res) => {
  const result = await registerController.create(req.body);
  return res.status(201).json(result);
});

api.get('/register', async (_req, res) => {
  console.log('oi1');
  const result = await registerController.getAll();
  return res.status(200).json(result);
});

api.listen("3008", () => {
  console.log(`running on port 3008`);
})

api.use(errorHandlerMiddleware);
