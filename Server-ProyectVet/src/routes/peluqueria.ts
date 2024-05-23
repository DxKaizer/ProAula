import { Router } from "express";
import { deleteConsulta, getConsulta, getConsultas, postConsulta, putConsulta } from "../controllers/peluqueria";

const router = Router();
router.get('/',getConsultas);
router.get('/:id',getConsulta);
router.delete('/:id',deleteConsulta);
router.post('/',postConsulta);
router.put('/:id',putConsulta);
export default router;