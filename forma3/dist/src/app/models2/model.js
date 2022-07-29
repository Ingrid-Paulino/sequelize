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
Object.defineProperty(exports, "__esModule", { value: true });
// const crypto = require('crypto');
const getAllAdmin = (sequelizeDAO, tabelaNameModel, columName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('0i4');
        // console.log(sequelizeDAO);
        const result = yield sequelizeDAO.findAll({
            include: { model: tabelaNameModel, as: columName }
        });
        console.log('0i5');
        return result;
    }
    catch (error) {
        console.log('error', error);
        throw new Error(`error ${error}`);
    }
});
// const getAll = async (sequelizeDAO) => {
//   try {
//   console.log('o14');
//     const result = await sequelizeDAO.findAll({
//       include: {model: nomeModel,}
//     });
//     return result;
//   } catch (error) {
//     console.log('error', error);
//     throw new Error(`error ${error}`);
//   }
// };
// const create = async (data, sequelizeDAO, hash) => {
//   try {
//     const id = crypto.randomUUID();
//     const result = await sequelizeDAO.create({ id, ...data, password: hash, createdAt: new Date() });
//     return result;
//   } catch (error) {
//     console.log('error', error);
//     throw new Error(`error ${error}`);
//   }
// };
// const createOther = async <T, T2> (data: T, sequelizeDAO: any): Promise<T2> => {
//   try {
//     const id = crypto.randomUUID();
//     const result = await sequelizeDAO.create({ id, ...data, createdAt: new Date() });
//     return result;
//   } catch (error) {
//     console.log('error', error);
//     throw new Error(`error ${error}`);
//   }
// };
// const findAnything = async <T extends commonDates, T2> (data: T, sequelizeDAO: any): Promise<T2> => {
//   try {
//     const foundSomeThink = await sequelizeDAO.findOne({ where:  { email: data.email } });
//     return foundSomeThink;
//   } catch (error) {
//     console.log('error', error);
//     throw new Error(`error ${error}`);
//   }
// };
exports.default = {
    // create,
    // getAll,
    getAllAdmin
    // findAnything,
    // createOther
};
