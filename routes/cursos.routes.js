import { Router } from "express";

const router = Router();

router.get("/cursos");
router.get("/cursos/:id");
router.post("/cursos");
router.put("/cursos/:id");
router.delete("/cursos/:id");

export default router;
