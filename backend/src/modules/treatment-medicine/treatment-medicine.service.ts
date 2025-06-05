import {PrismaClient, TreatmentMedicine} from '@prisma/client'

export class TreatmentMedicineService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: TreatmentMedicineService;

  public static getInstance(): TreatmentMedicineService {
    if (!TreatmentMedicineService.instance) {
      TreatmentMedicineService.instance = new TreatmentMedicineService();
    }
    return TreatmentMedicineService.instance;
  }


  public async getTreatmentMedicine(): Promise<TreatmentMedicine[]> {
    try {
      return await this.prisma.treatmentMedicine.findMany();
    } catch (error) {
      console.error("Error fetching treatmentMedicines: ", error)
      return []
    }
  }

  public async addTreatmentMedicine(treatmentMedicine: TreatmentMedicine): Promise<TreatmentMedicine | null> {
    try {
      return await this.prisma.treatmentMedicine.create({
        data: treatmentMedicine
      });
    } catch (error) {
      console.error("Error adding treatmentMedicine: ", error)
      return null
    }

  }

  public async deleteTreatmentMedicine(id: number): Promise<TreatmentMedicine | null> {
    try {
      const treatmentMedicine = await this.prisma.treatmentMedicine.findUnique({where: {id}})
      if (!treatmentMedicine) {
        console.error(`TreatmentMedicine with id: ${id} not found`)
        return null
      }
      return await this.prisma.treatmentMedicine.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting treatmentMedicine: ", error)
      return null
    }
  }

  public async updateTreatmentMedicine(treatmentMedicineId: number, treatmentMedicineData: TreatmentMedicine): Promise<TreatmentMedicine | null> {
    try {
      return await this.prisma.treatmentMedicine.update({
        data: treatmentMedicineData,
        where: {id: treatmentMedicineId}
      });
    } catch (error) {
      console.error("Error updating treatmentMedicine: ", error)
      return null
    }
  }
}
