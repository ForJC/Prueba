import { getAmor, postAmor } from '../controllers/amor.controllers.js';

import { Router } from 'express';
const router=Router();

//end points (Rutas)
router.get('/noeli/:id',getAmor)
insret.post('/noelia',postAmor)

export default router;