import {DoctorService} from "../services/doctor.service";
import {Doctor} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class DoctorController {
  private doctorService: DoctorService = DoctorService.getInstance()

  public async getDoctors(req: Request, res: Response) {
    try {
      const doctors: Doctor[] = await this.doctorService.getDoctors()
      return res.status(200).json(doctors)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching doctors: ${error}`
      })
    }
  }

  public async getDoctorById(req: Request, res: Response) {
    try {
      const doctorId = parseValidNumericId(req.params.id)
      if (doctorId === null) {
        return res.status(400).json({
          message: `Param id is not a valid doctor id`
        })
      }
      const doctor: Doctor | null = await this.doctorService.getDoctorById(doctorId)
      if (!doctor) {
        return res.status(404).json({
          message: `Doctor with id: ${doctorId} not found`
        })
      }
      return res.status(200).json(doctor)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching doctor: ${error}`
      })
    }
  }

  public async addDoctor(req: Request, res: Response) {
    try {
      const doctor_data: Doctor = req.body
      const doctor: Doctor | null = await this.doctorService.addDoctor(doctor_data)
      return res.status(201).json(doctor)
    } catch (error) {
      res.status(500).json({message: `Error adding doctor: ${error}`});

    }
  }

  public async deleteDoctor(req: Request, res: Response) {
    try {
      const doctorId = parseValidNumericId(req.params.id)
      if (doctorId === null) {
        return res.status(400).json({
          message: `Param id is not a valid doctor id`
        })
      }
      const doctor: Doctor | null = await this.doctorService.deleteDoctor(doctorId)
      if (!doctor) {
        return res.status(404).json({
          message: `Doctor with id: ${doctorId} not found`
        })
      }
      return res.status(200).json(doctor)
    } catch (error) {
      res.status(500).json({message: `Error deleting doctor: ${error}`});
    }
  }

  public async updateDoctor(req: Request, res: Response) {
    try {
      const doctorId = parseValidNumericId(req.params.id)
      if (doctorId === null) {
        return res.status(400).json({
          message: `Param id is not a valid doctor id`
        })
      }
      const doctorData: Doctor = req.body
      const doctor: Doctor | null = await this.doctorService.updateDoctor(doctorId, doctorData)
      if (!doctor) {
        return res.status(404).json({
          message: `Doctor with id: ${doctorId} not found`
        })
      }
      return res.status(200).json(doctor)
    } catch (error) {
      res.status(500).json({message: `Error updating doctor: ${error}`});
    }
  }

}