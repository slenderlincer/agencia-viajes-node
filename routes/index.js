import express from 'express'
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonio, paginaDetalleViaje} from '../controllers/paginaControllers.js';
import { guardarTestimonio } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio );

router.get('/aboutUs', paginaNosotros);
 
router.get('/travels',paginaViajes )

router.get('/travels/:slug', paginaDetalleViaje)

router.get('/testimonials', paginaTestimonio)

router.post('/testimonials', guardarTestimonio)


export default router;