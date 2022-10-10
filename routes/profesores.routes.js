import { Router } from "express";

const router = Router();

router.get("/profesores");
router.get("/profesores/:id");
router.post("/profesores");
router.put("/profesores/:id");
router.delete("/profesores/:id");

export default router;
