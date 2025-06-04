import express, {Request, Response} from "express";
import {AllergyController} from "../controllers/allergy.controller";

const router = express.Router();
const allergyController = new AllergyController()

router.get("/", async (req: Request, res: Response) => {
      await allergyController.getAllergies(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await allergyController.getAllergyById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await allergyController.addAllergy(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await allergyController.deleteAllergy(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await allergyController.updateAllergy(req, res)
    }
)

export default router;
