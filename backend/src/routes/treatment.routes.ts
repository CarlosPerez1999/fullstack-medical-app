import express, {Request, Response} from "express";
import {TreatmentController} from "../controllers/treatment.controller";

const router = express.Router();
const treatmentController = new TreatmentController()

router.get("/", async (req: Request, res: Response) => {
      await treatmentController.getTreatments(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await treatmentController.getTreatmentById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await treatmentController.addTreatment(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await treatmentController.deleteTreatment(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await treatmentController.updateTreatment(req, res)
    }
)

export default router;
