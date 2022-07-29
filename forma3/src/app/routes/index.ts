import express2 from 'express';
const route = express2.Router({ mergeParams: true });

import registerRoute from './register';

route.use('/register', registerRoute);

export default route;