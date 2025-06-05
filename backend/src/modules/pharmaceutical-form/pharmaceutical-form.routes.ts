import express, {Request, Response} from "express";
import {PharmaceuticalFormController} from "./pharmaceutical-form.controller";

const router = express.Router();
const pharmaceuticalFormController = new PharmaceuticalFormController()

router.get("/", async (req: Request, res: Response) => {
      await pharmaceuticalFormController.getPharmaceuticalForms(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await pharmaceuticalFormController.getPharmaceuticalFormById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await pharmaceuticalFormController.addPharmaceuticalForm(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await pharmaceuticalFormController.deletePharmaceuticalForm(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await pharmaceuticalFormController.updatePharmaceuticalForm(req, res)
    }
)

export default router;
