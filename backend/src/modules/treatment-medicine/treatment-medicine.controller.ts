import {TreatmentMedicineService} from "./treatment-medicine.service";
import {TreatmentMedicine} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class TreatmentMedicineController {
  private treatmentMedicineService: TreatmentMedicineService = TreatmentMedicineService.getInstance()

  public async getTreatmentMedicines(req: Request, res: Response) {
    try {
      const treatmentMedicines: TreatmentMedicine[] = await this.treatmentMedicineService.getTreatmentMedicine()
      return res.status(200).json(treatmentMedicines)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching treatmentMedicines: ${error}`
      })
    }
  }

  public async addTreatmentMedicine(req: Request, res: Response) {
    try {
      const treatmentMedicine_data: TreatmentMedicine = req.body
      const treatmentMedicine: TreatmentMedicine | null = await this.treatmentMedicineService.addTreatmentMedicine(treatmentMedicine_data)
      return res.status(201).json(treatmentMedicine)
    } catch (error) {
      res.status(500).json({message: `Error adding treatmentMedicine: ${error}`});

    }
  }

  public async deleteTreatmentMedicine(req: Request, res: Response) {
    try {
      const treatmentMedicineId = parseValidNumericId(req.params.id)
      if (treatmentMedicineId === null) {
        return res.status(400).json({
          message: `Param id is not a valid treatmentMedicine id`
        })
      }
      const treatmentMedicine: TreatmentMedicine | null = await this.treatmentMedicineService.deleteTreatmentMedicine(treatmentMedicineId)
      if (!treatmentMedicine) {
        return res.status(404).json({
          message: `TreatmentMedicine with id: ${treatmentMedicineId} not found`
        })
      }
      return res.status(200).json(treatmentMedicine)
    } catch (error) {
      res.status(500).json({message: `Error deleting treatmentMedicine: ${error}`});
    }
  }

  public async updateTreatmentMedicine(req: Request, res: Response) {
    try {
      const treatmentMedicineId = parseValidNumericId(req.params.id)
      if (treatmentMedicineId === null) {
        return res.status(400).json({
          message: `Param id is not a valid treatmentMedicine id`
        })
      }
      const treatmentMedicineData: TreatmentMedicine = req.body
      const treatmentMedicine: TreatmentMedicine | null = await this.treatmentMedicineService.updateTreatmentMedicine(treatmentMedicineId, treatmentMedicineData)
      if (!treatmentMedicine) {
        return res.status(404).json({
          message: `TreatmentMedicine with id: ${treatmentMedicineId} not found`
        })
      }
      return res.status(200).json(treatmentMedicine)
    } catch (error) {
      res.status(500).json({message: `Error updating treatmentMedicine: ${error}`});
    }
  }

}