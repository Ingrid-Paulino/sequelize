// import bcrypt from 'bcryptjs';
// import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
// import entryMsgStatusError from '../helpers/entryMsgStatusError';
import Model from '../models2/model';
import Client from '../../db/models/client';
import Address from '../../db/models/address';


// import descriptografia from '../utils/descriptografia';


const getAll = async () => {
  const result = await Model.getAllAdmin(Client, Address, 'addresses');
  // if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
  return result;
};

export default {
  getAll,
}


