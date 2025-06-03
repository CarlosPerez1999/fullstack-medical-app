import {UserService} from "../services/user.service";
import {User} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class UserController {
  private userService: UserService = UserService.getInstance()

  public async getUsers(req: Request, res: Response) {
    try {
      const users: User[] = await this.userService.getUsers()
      return res.status(200).json(users)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching users: ${error}`
      })
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const userId = parseValidNumericId(req.params.id)
      if (userId === null) {
        return res.status(400).json({
          message: `Param id is not a valid user id`
        })
      }
      const user: User | null = await this.userService.getUserById(userId)
      if (!user) {
        return res.status(404).json({
          message: `User with id: ${userId} not found`
        })
      }
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching user: ${error}`
      })
    }
  }

  public async addUser(req: Request, res: Response) {
    try {
      const user_data: User = req.body
      const user: User | null = await this.userService.addUser(user_data)
      return res.status(201).json(user)
    } catch (error) {
      res.status(500).json({message: `Error adding user: ${error}`});

    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const userId = parseValidNumericId(req.params.id)
      if (userId === null) {
        return res.status(400).json({
          message: `Param id is not a valid user id`
        })
      }
      const user: User | null = await this.userService.deleteUser(userId)
      if (!user) {
        return res.status(404).json({
          message: `User with id: ${userId} not found`
        })
      }
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({message: `Error deleting user: ${error}`});
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const userId = parseValidNumericId(req.params.id)
      if (userId === null) {
        return res.status(400).json({
          message: `Param id is not a valid user id`
        })
      }
      const userData: User = req.body
      const user: User | null = await this.userService.updateUser(userId, userData)
      if (!user) {
        return res.status(404).json({
          message: `User with id: ${userId} not found`
        })
      }
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).json({message: `Error updating user: ${error}`});
    }
  }

}