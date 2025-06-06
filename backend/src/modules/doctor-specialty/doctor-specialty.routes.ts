import express, {Request, Response} from "express";
import {DoctorSpecialtyController} from "./doctor-specialty.controller";

const router = express.Router();
const doctorSpecialtyController = new DoctorSpecialtyController()

router.get("/", async (req: Request, res: Response) => {
      await doctorSpecialtyController.getDoctorSpecialties(req, res)
    }
)

router.post("/", async (req: Request, res: Response) => {
      await doctorSpecialtyController.addDoctorSpecialty(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await doctorSpecialtyController.deleteDoctorSpecialty(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await doctorSpecialtyController.updateDoctorSpecialty(req, res)
    }
)

export default router;
