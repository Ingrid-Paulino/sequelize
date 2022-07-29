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
const registrationServices_1 = __importDefault(require("../services/registrationServices"));
const getAlll2 = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Começando projeto');
});
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield registrationServices_1.default.getAll();
    return res.status(200).json(result);
});
// const create = async (req: Request, res: Response) => {
//   // const data = await validateSchema.ClientSchema(body);
//   const result = await RegisterService.create(req.body);
//   return res.status(201).json(result);
// };
exports.default = {
    // create,
    getAll,
    getAlll2
};
