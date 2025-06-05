import express, {Request, Response} from "express";
import {PatientAllergyController} from "./patient-allergy.controller";

const router = express.Router();
const patientAllergyController = new PatientAllergyController()

router.get("/", async (req: Request, res: Response) => {
      await patientAllergyController.getPatientAllergies(req, res)
    }
)

router.post("/", async (req: Request, res: Response) => {
      await patientAllergyController.addPatientAllergy(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await patientAllergyController.deletePatientAllergy(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await patientAllergyController.updatePatientAllergy(req, res)
    }
)

export default router;
