import express, {Request, Response} from "express";
import {MedicineController} from "../controllers/medicine.controller";

const router = express.Router();
const medicineController = new MedicineController()

router.get("/", async (req: Request, res: Response) => {
      await medicineController.getMedicines(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await medicineController.getMedicineById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await medicineController.addMedicine(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await medicineController.deleteMedicine(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await medicineController.updateMedicine(req, res)
    }
)

export default router;
