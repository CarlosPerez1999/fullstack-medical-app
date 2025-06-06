import express, {Request, Response} from "express";
import {SpecialtyController} from "./specialty.controller";

const router = express.Router();
const specialtyController = new SpecialtyController()

router.get("/", async (req: Request, res: Response) => {
      await specialtyController.getSpecialties(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await specialtyController.getSpecialtyById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await specialtyController.addSpecialty(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await specialtyController.deleteSpecialty(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await specialtyController.updateSpecialty(req, res)
    }
)

export default router;
