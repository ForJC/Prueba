import { getAmor, postAmor } from '../controllers/amor.controllers.js';

import { Router } from 'express';
const router=Router();

//end points (Rutas)
router.get('/noelia/:id',getAmor)
router.post('/noelia',postAmor)

export default router;