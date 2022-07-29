"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bcrypt from 'bcryptjs';
// import { MSG, StatusCodes } from '../enum/enumStatusAndMessage';
// import entryMsgStatusError from '../helpers/entryMsgStatusError';
const model_1 = __importDefault(require("../models2/model"));
const client_1 = __importDefault(require("../../db/models/client"));
const address_1 = __importDefault(require("../../db/models/address"));
// import descriptografia from '../utils/descriptografia';
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_1.default.getAllAdmin(client_1.default, address_1.default, 'addresses');
    // if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
    return result;
});
// const getAll = async () => {
//   console.log('oi3');
//   const result = await Model.getAllAdmin(Client);
//   console.log(result);
//   // if (!result) throw entryMsgStatusError(StatusCodes.OK, '[]');
//   return result;
// };
exports.default = {
    getAll,
};
