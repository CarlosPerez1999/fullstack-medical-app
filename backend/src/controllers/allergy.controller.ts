import {AllergyService} from "../services/allergy.service";
import {Allergy} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class AllergyController {
  private allergyService: AllergyService = AllergyService.getInstance()

  public async getAllergies(req: Request, res: Response) {
    try {
      const allergies: Allergy[] = await this.allergyService.getAllergies()
      return res.status(200).json(allergies)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching allergies: ${error}`
      })
    }
  }

  public async getAllergyById(req: Request, res: Response) {
    try {
      const allergyId = parseValidNumericId(req.params.id)
      if (allergyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid allergy id`
        })
      }
      const allergy: Allergy | null = await this.allergyService.getAllergyById(allergyId)
      if (!allergy) {
        return res.status(404).json({
          message: `Allergy with id: ${allergyId} not found`
        })
      }
      return res.status(200).json(allergy)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching allergy: ${error}`
      })
    }
  }

  public async addAllergy(req: Request, res: Response) {
    try {
      const allergy_data: Allergy = req.body
      const allergy: Allergy | null = await this.allergyService.addAllergy(allergy_data)
      return res.status(201).json(allergy)
    } catch (error) {
      res.status(500).json({message: `Error adding allergy: ${error}`});

    }
  }

  public async deleteAllergy(req: Request, res: Response) {
    try {
      const allergyId = parseValidNumericId(req.params.id)
      if (allergyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid allergy id`
        })
      }
      const allergy: Allergy | null = await this.allergyService.deleteAllergy(allergyId)
      if (!allergy) {
        return res.status(404).json({
          message: `Allergy with id: ${allergyId} not found`
        })
      }
      return res.status(200).json(allergy)
    } catch (error) {
      res.status(500).json({message: `Error deleting allergy: ${error}`});
    }
  }

  public async updateAllergy(req: Request, res: Response) {
    try {
      const allergyId = parseValidNumericId(req.params.id)
      if (allergyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid allergy id`
        })
      }
      const allergyData: Allergy = req.body
      const allergy: Allergy | null = await this.allergyService.updateAllergy(allergyId, allergyData)
      if (!allergy) {
        return res.status(404).json({
          message: `Allergy with id: ${allergyId} not found`
        })
      }
      return res.status(200).json(allergy)
    } catch (error) {
      res.status(500).json({message: `Error updating allergy: ${error}`});
    }
  }

}