import express, {Request, Response} from "express";
import {HospitalizationController} from "../controllers/hospitalization.controller";

const router = express.Router();
const hospitalizationController = new HospitalizationController()

router.get("/", async (req: Request, res: Response) => {
      await hospitalizationController.getHospitalizations(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await hospitalizationController.getHospitalizationById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await hospitalizationController.addHospitalization(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await hospitalizationController.deleteHospitalization(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await hospitalizationController.updateHospitalization(req, res)
    }
)

export default router;
