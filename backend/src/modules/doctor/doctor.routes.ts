import express, {Request, Response} from "express";
import {DoctorController} from "./doctor.controller";

const router = express.Router();
const doctorController = new DoctorController()

router.get("/", async (req: Request, res: Response) => {
      await doctorController.getDoctors(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await doctorController.getDoctorById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await doctorController.addDoctor(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await doctorController.deleteDoctor(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await doctorController.updateDoctor(req, res)
    }
)

export default router;
