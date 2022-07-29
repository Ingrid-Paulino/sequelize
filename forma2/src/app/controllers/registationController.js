const RegisterService = require('../services/registrationServices');

const getAll = async () => {
  const result = await RegisterService.getAll();
  return result;
};

const create = async (body) => {
  const result = await RegisterService.create(body);
  return result;
};

module.exports = {
  create,
  getAll
};
