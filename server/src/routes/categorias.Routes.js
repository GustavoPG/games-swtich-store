// usuariosRouter.js
import { Router } from 'express';
import { loginUser, createNewUser, getUser  } from '../controllers/categoriasController.js';
import { validparameters, validateParametersUser } from '../middlewares/validateMiddleware.js';
import { validateToken } from '../middlewares/validateTokenMiddleware.js';
import { reportTransasction } from '../middlewares/reportMiddleware.js';

const router = Router();

router.use(reportTransasction);

// Rutas
router.get('/categorias', validateToken, getUser);
router.post('/categorias',validparameters, loginUser);
router.get('/categorias/:id', validateToken, getUser);
router.put('/categorias/:id',validateParametersUser ,createNewUser);
router.delete('/categorias/:id',validateParametersUser ,createNewUser);


export default router;