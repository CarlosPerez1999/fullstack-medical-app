import express, {Request, Response} from "express";
import {PatientController} from "../controllers/patient.controller";

const router = express.Router();
const patientController = new PatientController()

router.get("/", async (req: Request, res: Response) => {
      await patientController.getPatients(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await patientController.getPatientById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await patientController.addPatient(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await patientController.deletePatient(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await patientController.updatePatient(req, res)
    }
)

export default router;
