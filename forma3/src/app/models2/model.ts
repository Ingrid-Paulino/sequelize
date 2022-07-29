// const crypto = require('crypto');
const getAllAdmin = async (sequelizeDAO: any, tabelaNameModel: any, columName: any) => {
  try {
    console.log('0i4');
    // console.log(sequelizeDAO);

    const result = await sequelizeDAO.findAll({
      include: { model: tabelaNameModel, as: columName}
    });
    console.log('0i5');

    return result;
  } catch (error) {
    console.log('error', error);
    throw new Error(`error ${error}`);
  }
};




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

export default  {
  // create,
  // getAll,
  getAllAdmin
  // findAnything,
  // createOther
};
