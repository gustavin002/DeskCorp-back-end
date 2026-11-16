import { Router } from "express";
import {
  listarChamados,
  buscarChamadoPorId,
  criarChamado,
  atualizarChamado,
  deletarChamado,
} from "../controllers/chamadosController.js";

const router = Router();

router.get("/", listarChamados);
router.get("/:id", buscarChamadoPorId);
router.post("/", criarChamado);
router.put("/:id", atualizarChamado);
router.delete("/:id", deletarChamado);

export default router;
