import { Router }  from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import TaskController from './app/controllers/TaskController';
import LabelController from './app/controllers/LabelController';

import authMiddleWare from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleWare);

/*
* The following routes require the user to be authenticated
*/

routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks/:id', TaskController.index);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);

routes.post('/labels', LabelController.store);
routes.get('/labels/:id', LabelController.index);
routes.put('/labels/:id', LabelController.update);
routes.delete('/labels/:id', LabelController.delete);

export default routes;
