import express, {Request, Response} from "express";
import {UserController} from "./user.controller";

const router = express.Router();
const userController = new UserController()

router.get("/", async (req: Request, res: Response) => {
      await userController.getUsers(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await userController.getUserById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await userController.addUser(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await userController.deleteUser(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await userController.updateUser(req, res)
    }
)

export default router;
