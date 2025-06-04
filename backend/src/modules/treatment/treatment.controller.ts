import {TreatmentService} from "./treatment.service";
import {Treatment} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class TreatmentController {
  private treatmentService: TreatmentService = TreatmentService.getInstance()

  public async getTreatments(req: Request, res: Response) {
    try {
      const treatments: Treatment[] = await this.treatmentService.getTreatments()
      return res.status(200).json(treatments)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching treatments: ${error}`
      })
    }
  }

  public async getTreatmentById(req: Request, res: Response) {
    try {
      const treatmentId = parseValidNumericId(req.params.id)
      if (treatmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid treatment id`
        })
      }
      const treatment: Treatment | null = await this.treatmentService.getTreatmentById(treatmentId)
      if (!treatment) {
        return res.status(404).json({
          message: `Treatment with id: ${treatmentId} not found`
        })
      }
      return res.status(200).json(treatment)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching treatment: ${error}`
      })
    }
  }

  public async addTreatment(req: Request, res: Response) {
    try {
      const treatment_data: Treatment = req.body
      const treatment: Treatment | null = await this.treatmentService.addTreatment(treatment_data)
      return res.status(201).json(treatment)
    } catch (error) {
      res.status(500).json({message: `Error adding treatment: ${error}`});

    }
  }

  public async deleteTreatment(req: Request, res: Response) {
    try {
      const treatmentId = parseValidNumericId(req.params.id)
      if (treatmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid treatment id`
        })
      }
      const treatment: Treatment | null = await this.treatmentService.deleteTreatment(treatmentId)
      if (!treatment) {
        return res.status(404).json({
          message: `Treatment with id: ${treatmentId} not found`
        })
      }
      return res.status(200).json(treatment)
    } catch (error) {
      res.status(500).json({message: `Error deleting treatment: ${error}`});
    }
  }

  public async updateTreatment(req: Request, res: Response) {
    try {
      const treatmentId = parseValidNumericId(req.params.id)
      if (treatmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid treatment id`
        })
      }
      const treatmentData: Treatment = req.body
      const treatment: Treatment | null = await this.treatmentService.updateTreatment(treatmentId, treatmentData)
      if (!treatment) {
        return res.status(404).json({
          message: `Treatment with id: ${treatmentId} not found`
        })
      }
      return res.status(200).json(treatment)
    } catch (error) {
      res.status(500).json({message: `Error updating treatment: ${error}`});
    }
  }

}