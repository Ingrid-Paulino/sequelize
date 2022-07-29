import * as express from 'express';

const registerRoute = express.Router({ mergeParams: true });
import registerController from '../controllers/registationController';

registerRoute.get('/', registerController.getAll)
// route.post('/register', registerController.create)
registerRoute.get('/2', registerController.getAlll2)


export default registerRoute;
