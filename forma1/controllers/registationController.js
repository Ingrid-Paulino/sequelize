// import validateSchema from '../schemas';
const RegisterService = require('../services/registrationServices');

const getAll = async () => {
  console.log('oi2');
  const result = await RegisterService.getAll();
  return result;
};

const create = async (body) => {
  // const data = await validateSchema.ClientSchema(body);
  const result = await RegisterService.create(data);
  return result;
};

module.exports = {
  create,
  getAll
};
