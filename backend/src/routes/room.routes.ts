import express, {Request, Response} from "express";
import {RoomController} from "../controllers/room.controller";

const router = express.Router();
const roomController = new RoomController()

router.get("/", async (req: Request, res: Response) => {
      await roomController.getRooms(req, res)
    }
)
router.get("/:id", async (req: Request, res: Response) => {
      await roomController.getRoomById(req, res)
    }
)
router.post("/", async (req: Request, res: Response) => {
      await roomController.addRoom(req, res)
    }
)
router.delete("/:id", async (req: Request, res: Response) => {
      await roomController.deleteRoom(req, res)
    }
)
router.patch("/:id", async (req: Request, res: Response) => {
      await roomController.updateRoom(req, res)
    }
)

export default router;
