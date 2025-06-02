import {ConsultService} from "../services/consult.service";
import {Consult} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class ConsultController {
  private consultService: ConsultService = ConsultService.getInstance()

  public async getConsults(req: Request, res: Response) {
    try {
      const consults: Consult[] = await this.consultService.getConsults()
      return res.status(200).json(consults)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching consults: ${error}`
      })
    }
  }

  public async getConsultById(req: Request, res: Response) {
    try {
      const consultId = parseValidNumericId(req.params.id)
      if (consultId === null) {
        return res.status(400).json({
          message: `Param id is not a valid consult id`
        })
      }
      const consult: Consult | null = await this.consultService.getConsultById(consultId)
      if (!consult) {
        return res.status(404).json({
          message: `Consult with id: ${consultId} not found`
        })
      }
      return res.status(200).json(consult)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching consult: ${error}`
      })
    }
  }

  public async addConsult(req: Request, res: Response) {
    try {
      const consult_data: Consult = req.body
      const consult: Consult | null = await this.consultService.addConsult(consult_data)
      return res.status(201).json(consult)
    } catch (error) {
      res.status(500).json({message: `Error adding consult: ${error}`});

    }
  }

  public async deleteConsult(req: Request, res: Response) {
    try {
      const consultId = parseValidNumericId(req.params.id)
      if (consultId === null) {
        return res.status(400).json({
          message: `Param id is not a valid consult id`
        })
      }
      const consult: Consult | null = await this.consultService.deleteConsult(consultId)
      if (!consult) {
        return res.status(404).json({
          message: `Consult with id: ${consultId} not found`
        })
      }
      return res.status(200).json(consult)
    } catch (error) {
      res.status(500).json({message: `Error deleting consult: ${error}`});
    }
  }

  public async updateConsult(req: Request, res: Response) {
    try {
      const consultId = parseValidNumericId(req.params.id)
      if (consultId === null) {
        return res.status(400).json({
          message: `Param id is not a valid consult id`
        })
      }
      const consultData: Consult = req.body
      const consult: Consult | null = await this.consultService.updateConsult(consultId, consultData)
      if (!consult) {
        return res.status(404).json({
          message: `Consult with id: ${consultId} not found`
        })
      }
      return res.status(200).json(consult)
    } catch (error) {
      res.status(500).json({message: `Error updating consult: ${error}`});
    }
  }

}