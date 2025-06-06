import {DoctorSpecialtyService} from "./doctor-specialty.service";
import {DoctorSpecialty} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class DoctorSpecialtyController {
  private doctorSpecialtyService: DoctorSpecialtyService = DoctorSpecialtyService.getInstance()

  public async getDoctorSpecialties(req: Request, res: Response) {
    try {
      const doctorSpecialties: DoctorSpecialty[] = await this.doctorSpecialtyService.getDoctorSpecialties()
      return res.status(200).json(doctorSpecialties)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching doctorSpecialties: ${error}`
      })
    }
  }

  public async addDoctorSpecialty(req: Request, res: Response) {
    try {
      const doctorSpecialty_data: DoctorSpecialty = req.body
      const doctorSpecialty: DoctorSpecialty | null = await this.doctorSpecialtyService.addDoctorSpecialty(doctorSpecialty_data)
      return res.status(201).json(doctorSpecialty)
    } catch (error) {
      res.status(500).json({message: `Error adding doctorSpecialty: ${error}`});

    }
  }

  public async deleteDoctorSpecialty(req: Request, res: Response) {
    try {
      const doctorSpecialtyId = parseValidNumericId(req.params.id)
      if (doctorSpecialtyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid doctorSpecialty id`
        })
      }
      const doctorSpecialty: DoctorSpecialty | null = await this.doctorSpecialtyService.deleteDoctorSpecialty(doctorSpecialtyId)
      if (!doctorSpecialty) {
        return res.status(404).json({
          message: `DoctorSpecialty with id: ${doctorSpecialtyId} not found`
        })
      }
      return res.status(200).json(doctorSpecialty)
    } catch (error) {
      res.status(500).json({message: `Error deleting doctorSpecialty: ${error}`});
    }
  }

  public async updateDoctorSpecialty(req: Request, res: Response) {
    try {
      const doctorSpecialtyId = parseValidNumericId(req.params.id)
      if (doctorSpecialtyId === null) {
        return res.status(400).json({
          message: `Param id is not a valid doctorSpecialty id`
        })
      }
      const doctorSpecialtyData: DoctorSpecialty = req.body
      const doctorSpecialty: DoctorSpecialty | null = await this.doctorSpecialtyService.updateDoctorSpecialty(doctorSpecialtyId, doctorSpecialtyData)
      if (!doctorSpecialty) {
        return res.status(404).json({
          message: `DoctorSpecialty with id: ${doctorSpecialtyId} not found`
        })
      }
      return res.status(200).json(doctorSpecialty)
    } catch (error) {
      res.status(500).json({message: `Error updating doctorSpecialty: ${error}`});
    }
  }

}