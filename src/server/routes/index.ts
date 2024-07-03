import Router from 'express';
import { CitiesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {

  return res.send("Hello, Node!!");
});

router.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
router.post('/cities', CitiesController.createValidation, CitiesController.create);

export { router };