import {RoomService} from "./room.service";
import {Room} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class RoomController {
  private roomService: RoomService = RoomService.getInstance()

  public async getRooms(req: Request, res: Response) {
    try {
      const rooms: Room[] = await this.roomService.getRooms()
      return res.status(200).json(rooms)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching rooms: ${error}`
      })
    }
  }

  public async getRoomById(req: Request, res: Response) {
    try {
      const roomId = parseValidNumericId(req.params.id)
      if (roomId === null) {
        return res.status(400).json({
          message: `Param id is not a valid room id`
        })
      }
      const room: Room | null = await this.roomService.getRoomById(roomId)
      if (!room) {
        return res.status(404).json({
          message: `Room with id: ${roomId} not found`
        })
      }
      return res.status(200).json(room)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching room: ${error}`
      })
    }
  }

  public async addRoom(req: Request, res: Response) {
    try {
      const room_data: Room = req.body
      const room: Room | null = await this.roomService.addRoom(room_data)
      return res.status(201).json(room)
    } catch (error) {
      res.status(500).json({message: `Error adding room: ${error}`});

    }
  }

  public async deleteRoom(req: Request, res: Response) {
    try {
      const roomId = parseValidNumericId(req.params.id)
      if (roomId === null) {
        return res.status(400).json({
          message: `Param id is not a valid room id`
        })
      }
      const room: Room | null = await this.roomService.deleteRoom(roomId)
      if (!room) {
        return res.status(404).json({
          message: `Room with id: ${roomId} not found`
        })
      }
      return res.status(200).json(room)
    } catch (error) {
      res.status(500).json({message: `Error deleting room: ${error}`});
    }
  }

  public async updateRoom(req: Request, res: Response) {
    try {
      const roomId = parseValidNumericId(req.params.id)
      if (roomId === null) {
        return res.status(400).json({
          message: `Param id is not a valid room id`
        })
      }
      const roomData: Room = req.body
      const room: Room | null = await this.roomService.updateRoom(roomId, roomData)
      if (!room) {
        return res.status(404).json({
          message: `Room with id: ${roomId} not found`
        })
      }
      return res.status(200).json(room)
    } catch (error) {
      res.status(500).json({message: `Error updating room: ${error}`});
    }
  }

}