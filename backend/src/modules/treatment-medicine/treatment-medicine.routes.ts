import express, {Request, Response} from "express";
import {TreatmentMedicineController} from "./treatment-medicine.controller";

const router = express.Router();
const treatmentMedicineController = new TreatmentMedicineController()

router.get("/", async (req: Request, res: Response) => {
      await treatmentMedicineController.getTreatmentMedicines(req, res)
    }
)

router.post("/", async (req: Request, res: Response) => {
      await treatmentMedicineController.addTreatmentMedicine(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await treatmentMedicineController.deleteTreatmentMedicine(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await treatmentMedicineController.updateTreatmentMedicine(req, res)
    }
)

export default router;
