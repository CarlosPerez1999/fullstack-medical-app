import {HospitalizationService} from "./hospitalization.service";
import {Hospitalization} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class HospitalizationController {
  private hospitalizationService: HospitalizationService = HospitalizationService.getInstance()

  public async getHospitalizations(req: Request, res: Response) {
    try {
      const hospitalizations: Hospitalization[] = await this.hospitalizationService.getHospitalizations()
      return res.status(200).json(hospitalizations)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching hospitalizations: ${error}`
      })
    }
  }

  public async getHospitalizationById(req: Request, res: Response) {
    try {
      const hospitalizationId = parseValidNumericId(req.params.id)
      if (hospitalizationId === null) {
        return res.status(400).json({
          message: `Param id is not a valid hospitalization id`
        })
      }
      const hospitalization: Hospitalization | null = await this.hospitalizationService.getHospitalizationById(hospitalizationId)
      if (!hospitalization) {
        return res.status(404).json({
          message: `Hospitalization with id: ${hospitalizationId} not found`
        })
      }
      return res.status(200).json(hospitalization)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching hospitalization: ${error}`
      })
    }
  }

  public async addHospitalization(req: Request, res: Response) {
    try {
      const hospitalization_data: Hospitalization = req.body
      const hospitalization: Hospitalization | null = await this.hospitalizationService.addHospitalization(hospitalization_data)
      return res.status(201).json(hospitalization)
    } catch (error) {
      res.status(500).json({message: `Error adding hospitalization: ${error}`});

    }
  }

  public async deleteHospitalization(req: Request, res: Response) {
    try {
      const hospitalizationId = parseValidNumericId(req.params.id)
      if (hospitalizationId === null) {
        return res.status(400).json({
          message: `Param id is not a valid hospitalization id`
        })
      }
      const hospitalization: Hospitalization | null = await this.hospitalizationService.deleteHospitalization(hospitalizationId)
      if (!hospitalization) {
        return res.status(404).json({
          message: `Hospitalization with id: ${hospitalizationId} not found`
        })
      }
      return res.status(200).json(hospitalization)
    } catch (error) {
      res.status(500).json({message: `Error deleting hospitalization: ${error}`});
    }
  }

  public async updateHospitalization(req: Request, res: Response) {
    try {
      const hospitalizationId = parseValidNumericId(req.params.id)
      if (hospitalizationId === null) {
        return res.status(400).json({
          message: `Param id is not a valid hospitalization id`
        })
      }
      const hospitalizationData: Hospitalization = req.body
      const hospitalization: Hospitalization | null = await this.hospitalizationService.updateHospitalization(hospitalizationId, hospitalizationData)
      if (!hospitalization) {
        return res.status(404).json({
          message: `Hospitalization with id: ${hospitalizationId} not found`
        })
      }
      return res.status(200).json(hospitalization)
    } catch (error) {
      res.status(500).json({message: `Error updating hospitalization: ${error}`});
    }
  }

}