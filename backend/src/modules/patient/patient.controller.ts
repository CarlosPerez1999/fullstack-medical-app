import {PatientService} from "./patient.service";
import {Patient} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class PatientController {
  private patientService: PatientService = PatientService.getInstance()

  public async getPatients(req: Request, res: Response) {
    try {
      const patients: Patient[] = await this.patientService.getPatients()
      return res.status(200).json(patients)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching patients: ${error}`
      })
    }
  }

  public async getPatientById(req: Request, res: Response) {
    try {
      const patientId = parseValidNumericId(req.params.id)
      if (patientId === null) {
        return res.status(400).json({
          message: `Param id is not a valid patient id`
        })
      }
      const patient: Patient | null = await this.patientService.getPatientById(patientId)
      if (!patient) {
        return res.status(404).json({
          message: `Patient with id: ${patientId} not found`
        })
      }
      return res.status(200).json(patient)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching patient: ${error}`
      })
    }
  }

  public async addPatient(req: Request, res: Response) {
    try {
      const patient_data: Patient = req.body
      const patient: Patient | null = await this.patientService.addPatient(patient_data)
      return res.status(201).json(patient)
    } catch (error) {
      res.status(500).json({message: `Error adding patient: ${error}`});

    }
  }

  public async deletePatient(req: Request, res: Response) {
    try {
      const patientId = parseValidNumericId(req.params.id)
      if (patientId === null) {
        return res.status(400).json({
          message: `Param id is not a valid patient id`
        })
      }
      const patient: Patient | null = await this.patientService.deletePatient(patientId)
      if (!patient) {
        return res.status(404).json({
          message: `Patient with id: ${patientId} not found`
        })
      }
      return res.status(200).json(patient)
    } catch (error) {
      res.status(500).json({message: `Error deleting patient: ${error}`});
    }
  }

  public async updatePatient(req: Request, res: Response) {
    try {
      const patientId = parseValidNumericId(req.params.id)
      if (patientId === null) {
        return res.status(400).json({
          message: `Param id is not a valid patient id`
        })
      }
      const patientData: Patient = req.body
      const patient: Patient | null = await this.patientService.updatePatient(patientId, patientData)
      if (!patient) {
        return res.status(404).json({
          message: `Patient with id: ${patientId} not found`
        })
      }
      return res.status(200).json(patient)
    } catch (error) {
      res.status(500).json({message: `Error updating patient: ${error}`});
    }
  }

}