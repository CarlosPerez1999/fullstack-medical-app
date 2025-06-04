import express, {Request, Response} from "express";
import {AppointmentController} from "./appointment.controller";

const router = express.Router();
const appointmentController = new AppointmentController()

router.get("/", async (req: Request, res: Response) => {
      await appointmentController.getAppointments(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await appointmentController.getAppointmentById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await appointmentController.addAppointment(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await appointmentController.deleteAppointment(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await appointmentController.updateAppointment(req, res)
    }
)

export default router;
