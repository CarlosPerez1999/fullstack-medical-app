import express, {Request, Response} from "express";
import {ConsultController} from "./consult.controller";

const router = express.Router();
const consultController = new ConsultController()

router.get("/", async (req: Request, res: Response) => {
      await consultController.getConsults(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await consultController.getConsultById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await consultController.addConsult(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await consultController.deleteConsult(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await consultController.updateConsult(req, res)
    }
)

export default router;
