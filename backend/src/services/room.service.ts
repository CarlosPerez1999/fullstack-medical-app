import {PrismaClient, Room} from '@prisma/client'

export class RoomService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: RoomService;

  public static getInstance(): RoomService {
    if (!RoomService.instance) {
      RoomService.instance = new RoomService();
    }
    return RoomService.instance;
  }


  public async getRooms(): Promise<Room[]> {
    try {
      return await this.prisma.room.findMany();
    } catch (error) {
      console.error("Error fetching rooms: ", error)
      return []
    }
  }

  public async getRoomById(roomNumber: number): Promise<Room | null> {
    try {
      return await this.prisma.room.findUnique({
        where: {number: roomNumber}
      });
    } catch (error) {
      console.error("Error fetching room: ", error)
      return null
    }
  }

  public async addRoom(room: Room): Promise<Room | null> {
    try {
      return await this.prisma.room.create({
        data: room
      });
    } catch (error) {
      console.error("Error adding room: ", error)
      return null
    }

  }

  public async deleteRoom(roomNumber: number): Promise<Room | null> {
    try {
      const room = await this.getRoomById(roomNumber)
      if (!room) {
        console.error(`Room with id: ${roomNumber} not found`)
        return null
      }
      return await this.prisma.room.delete({
        where: {number: roomNumber}
      });
    } catch (error) {
      console.error("Error deleting room: ", error)
      return null
    }
  }

  public async updateRoom(roomNumber: number, roomData: Room): Promise<Room | null> {
    try {
      return await this.prisma.room.update({
        data: roomData,
        where: {number: roomNumber}
      });
    } catch (error) {
      console.error("Error updating room: ", error)
      return null
    }
  }
}
