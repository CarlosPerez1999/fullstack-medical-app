import {SpecialtyService} from "./specialty.service";
import {Specialty} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class SpecialtyController {
  private specialtyService: SpecialtyService = SpecialtyService.getInstance()

  public async getSpecialties(req: Request, res: Response) {
    try {
      const specialties: Specialty[] = await this.specialtyService.getSpecialties()
      return res.status(200).json(specialties)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching specialties: ${error}`
      })
    }
  }

  public async getSpecialtyById(req: Request, res: Response) {
    try {
      const specialtyId = parseValidNumericId(req.params.id)
      if (specialtyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid specialty id`
        })
      }
      const specialty: Specialty | null = await this.specialtyService.getSpecialtyById(specialtyId)
      if (!specialty) {
        return res.status(404).json({
          message: `Specialty with id: ${specialtyId} not found`
        })
      }
      return res.status(200).json(specialty)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching specialty: ${error}`
      })
    }
  }

  public async addSpecialty(req: Request, res: Response) {
    try {
      const specialty_data: Specialty = req.body
      const specialty: Specialty | null = await this.specialtyService.addSpecialty(specialty_data)
      return res.status(201).json(specialty)
    } catch (error) {
      res.status(500).json({message: `Error adding specialty: ${error}`});

    }
  }

  public async deleteSpecialty(req: Request, res: Response) {
    try {
      const specialtyId = parseValidNumericId(req.params.id)
      if (specialtyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid specialty id`
        })
      }
      const specialty: Specialty | null = await this.specialtyService.deleteSpecialty(specialtyId)
      if (!specialty) {
        return res.status(404).json({
          message: `Specialty with id: ${specialtyId} not found`
        })
      }
      return res.status(200).json(specialty)
    } catch (error) {
      res.status(500).json({message: `Error deleting specialty: ${error}`});
    }
  }

  public async updateSpecialty(req: Request, res: Response) {
    try {
      const specialtyId = parseValidNumericId(req.params.id)
      if (specialtyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid specialty id`
        })
      }
      const specialtyData: Specialty = req.body
      const specialty: Specialty | null = await this.specialtyService.updateSpecialty(specialtyId, specialtyData)
      if (!specialty) {
        return res.status(404).json({
          message: `Specialty with id: ${specialtyId} not found`
        })
      }
      return res.status(200).json(specialty)
    } catch (error) {
      res.status(500).json({message: `Error updating specialty: ${error}`});
    }
  }

}