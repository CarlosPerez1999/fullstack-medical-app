import {PatientAllergyService} from "./patient-allergy.service";
import {PatientAllergy} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class PatientAllergyController {
  private patientAllergyService: PatientAllergyService = PatientAllergyService.getInstance()

  public async getPatientAllergies(req: Request, res: Response) {
    try {
      const patientAllergies: PatientAllergy[] = await this.patientAllergyService.getPatientAllergies()
      return res.status(200).json(patientAllergies)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching patientAllergies: ${error}`
      })
    }
  }

  public async addPatientAllergy(req: Request, res: Response) {
    try {
      const patientAllergy_data: PatientAllergy = req.body
      const patientAllergy: PatientAllergy | null = await this.patientAllergyService.addPatientAllergy(patientAllergy_data)
      return res.status(201).json(patientAllergy)
    } catch (error) {
      res.status(500).json({message: `Error adding patientAllergy: ${error}`});

    }
  }

  public async deletePatientAllergy(req: Request, res: Response) {
    try {
      const patientAllergyId = parseValidNumericId(req.params.id)
      if (patientAllergyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid patientAllergy id`
        })
      }
      const patientAllergy: PatientAllergy | null = await this.patientAllergyService.deletePatientAllergy(patientAllergyId)
      if (!patientAllergy) {
        return res.status(404).json({
          message: `PatientAllergy with id: ${patientAllergyId} not found`
        })
      }
      return res.status(200).json(patientAllergy)
    } catch (error) {
      res.status(500).json({message: `Error deleting patientAllergy: ${error}`});
    }
  }

  public async updatePatientAllergy(req: Request, res: Response) {
    try {
      const patientAllergyId = parseValidNumericId(req.params.id)
      if (patientAllergyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid patientAllergy id`
        })
      }
      const patientAllergyData: PatientAllergy = req.body
      const patientAllergy: PatientAllergy | null = await this.patientAllergyService.updatePatientAllergy(patientAllergyId, patientAllergyData)
      if (!patientAllergy) {
        return res.status(404).json({
          message: `PatientAllergy with id: ${patientAllergyId} not found`
        })
      }
      return res.status(200).json(patientAllergy)
    } catch (error) {
      res.status(500).json({message: `Error updating patientAllergy: ${error}`});
    }
  }

}