import { Router } from "express";
import { getAlumnos } from "../controllers/alumnos.controller.js";

const router = Router();

router.get("/alumnos", getAlumnos);
router.get("/alumnos/:id");
router.post("/alumnos");
router.put("/alumnos/:id");
router.delete("/alumnos/:id");

export default router;
