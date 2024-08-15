// usuariosRouter.js
import { Router } from 'express';
import { loginUser, createNewUser, getUser  } from '../controllers/carritoController.js';
import { validparameters, validateParametersUser } from '../middlewares/validateMiddleware.js';
import { validateToken } from '../middlewares/validateTokenMiddleware.js';
import { reportTransasction } from '../middlewares/reportMiddleware.js';

const router = Router();

router.use(reportTransasction);

// Rutas
router.get('/carrito', validateToken, getUser);
router.post('/carrito',validparameters, loginUser);
router.get('/carrito/:id', validateToken, getUser);
router.put('/carrito/:id',validateParametersUser ,createNewUser);
router.delete('/carrito/:id',validateParametersUser ,createNewUser);


export default router;