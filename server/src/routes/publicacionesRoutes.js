// usuariosRouter.js
import { Router } from 'express';
import { loginUser, createNewUser, getUser  } from '../controllers/publicacionesController.js';
import { validparameters, validateParametersUser } from '../middlewares/validateMiddleware.js';
import { validateToken } from '../middlewares/validateTokenMiddleware.js';
import { reportTransasction } from '../middlewares/reportMiddleware.js';

const router = Router();

router.use(reportTransasction);

// Rutas
router.get('/publicaciones', validateToken, getUser);
router.post('/publicaciones',validparameters, loginUser);
router.get('/publicaciones/:id', validateToken, getUser);
router.put('/publicaciones/:id',validateParametersUser ,createNewUser);
router.delete('/publicaciones/:id',validateParametersUser ,createNewUser);


export default router;