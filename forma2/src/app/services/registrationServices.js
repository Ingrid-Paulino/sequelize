// import bcrypt from 'bcryptjs';
// import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
// import entryMsgStatusError from '../helpers/entryMsgStatusError';
const Model = require('../models 2/model');
const { Client, Address } = require('../../db/models');
// import descriptografia from '../utils/descriptografia';


const getAll = async () => {
  console.log('oi3');

  const result = await Model.getAllAdmin(Client, Address, 'addresses');
  // if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

const create = async (data) => {
  // const clientsAll = await getAll();

  // const hash = bcrypt.hashSync(data.password, 10);
  // const check = descriptografia(data.password, hash);
  // if (!check) throw entryMsgStatusError(StatusCodes.UNAUTHORIZED, MSG.INCORRECT_PASSWORD);

  // const findClient = clientsAll.find((client) => client.email === data.email);
  // if (findClient) throw entryMsgStatusError(StatusCodes.CONFLICT, MSG.EXISTING_USER);

  const result = await Model.create(data, Client, hash);
  return result;
};

module.exports = {
  create,
  getAll
};

