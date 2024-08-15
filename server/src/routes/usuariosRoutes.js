// usuariosRouter.js
import { Router } from 'express';
import { loginUser, createNewUser, getUser  } from '../controllers/usuariosController.js';
import { validparameters, validateParametersUser } from '../middlewares/validateMiddleware.js';
import { validateToken } from '../middlewares/validateTokenMiddleware.js';
import { reportTransasction } from '../middlewares/reportMiddleware.js';

const router = Router();

router.use(reportTransasction);

// Rutas
router.post('/usuario',validparameters, loginUser);
router.get('/usuarios', validateToken, getUser);
router.get('/usuarios/:id', validateToken, getUser);
router.put('/usuarios/:id',validateParametersUser ,createNewUser);
router.delete('/usuarios/:id',validateParametersUser ,deleteUser);


export default router;