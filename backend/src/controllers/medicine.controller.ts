import {MedicineService} from "../services/medicine.service";
import {Medicine} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class MedicineController {
  private medicineService: MedicineService = MedicineService.getInstance()

  public async getMedicines(req: Request, res: Response) {
    try {
      const medicines: Medicine[] = await this.medicineService.getMedicines()
      return res.status(200).json(medicines)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching medicines: ${error}`
      })
    }
  }

  public async getMedicineById(req: Request, res: Response) {
    try {
      const medicineId = parseValidNumericId(req.params.id)
      if (medicineId === null) {
        return res.status(400).json({
          message: `Param id is not a valid medicine id`
        })
      }
      const medicine: Medicine | null = await this.medicineService.getMedicineById(medicineId)
      if (!medicine) {
        return res.status(404).json({
          message: `Medicine with id: ${medicineId} not found`
        })
      }
      return res.status(200).json(medicine)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching medicine: ${error}`
      })
    }
  }

  public async addMedicine(req: Request, res: Response) {
    try {
      const medicine_data: Medicine = req.body
      const medicine: Medicine | null = await this.medicineService.addMedicine(medicine_data)
      return res.status(201).json(medicine)
    } catch (error) {
      res.status(500).json({message: `Error adding medicine: ${error}`});

    }
  }

  public async deleteMedicine(req: Request, res: Response) {
    try {
      const medicineId = parseValidNumericId(req.params.id)
      if (medicineId === null) {
        return res.status(400).json({
          message: `Param id is not a valid medicine id`
        })
      }
      const medicine: Medicine | null = await this.medicineService.deleteMedicine(medicineId)
      if (!medicine) {
        return res.status(404).json({
          message: `Medicine with id: ${medicineId} not found`
        })
      }
      return res.status(200).json(medicine)
    } catch (error) {
      res.status(500).json({message: `Error deleting medicine: ${error}`});
    }
  }

  public async updateMedicine(req: Request, res: Response) {
    try {
      const medicineId = parseValidNumericId(req.params.id)
      if (medicineId === null) {
        return res.status(400).json({
          message: `Param id is not a valid medicine id`
        })
      }
      const medicineData: Medicine = req.body
      const medicine: Medicine | null = await this.medicineService.updateMedicine(medicineId, medicineData)
      if (!medicine) {
        return res.status(404).json({
          message: `Medicine with id: ${medicineId} not found`
        })
      }
      return res.status(200).json(medicine)
    } catch (error) {
      res.status(500).json({message: `Error updating medicine: ${error}`});
    }
  }

}