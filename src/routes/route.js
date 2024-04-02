import express from "express";
import ControllerExercicio from "../controllers/controller.js";

const router = express.Router();

const controllers = new ControllerExercicio();

router.post("/somar", controllers.Somar);
router.get("/subtrair", controllers.Subtrair);
router.post("/dividir", controllers.Dividir);
router.get("/multiplicar", controllers.Multiplicar);

export default router;

