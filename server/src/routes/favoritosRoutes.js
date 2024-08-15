// usuariosRouter.js
import { Router } from 'express';
import { loginUser, createNewUser, getUser  } from '../controllers/favoritosController.js';
import { validparameters, validateParametersUser } from '../middlewares/validateMiddleware.js';
import { validateToken } from '../middlewares/validateTokenMiddleware.js';
import { reportTransasction } from '../middlewares/reportMiddleware.js';

const router = Router();

router.use(reportTransasction);

// Rutas
router.get('/favoritos', validateToken, getUser);
router.post('/favoritos',validparameters, loginUser);
router.get('/favoritos/:id', validateToken, getUser);
router.put('/favoritos/:id',validateParametersUser ,createNewUser);
router.delete('/favoritos/:id',validateParametersUser ,createNewUser);


export default router;