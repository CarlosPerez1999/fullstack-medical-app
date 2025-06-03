import {PrismaClient, User} from '@prisma/client'

export class UserService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: UserService;

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }


  public async getUsers(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      console.error("Error fetching users: ", error)
      return []
    }
  }

  public async getUserById(id: number): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching user: ", error)
      return null
    }
  }

  public async addUser(user: User): Promise<User | null> {
    try {
      return await this.prisma.user.create({
        data: user
      });
    } catch (error) {
      console.error("Error adding user: ", error)
      return null
    }

  }

  public async deleteUser(id: number): Promise<User | null> {
    try {
      const user = await this.getUserById(id)
      if (!user) {
        console.error(`User with id: ${id} not found`)
        return null
      }
      return await this.prisma.user.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting user: ", error)
      return null
    }
  }

  public async updateUser(userId: number, userData: User): Promise<User | null> {
    try {
      return await this.prisma.user.update({
        data: userData,
        where: {id: userId}
      });
    } catch (error) {
      console.error("Error updating user: ", error)
      return null
    }
  }
}
