import {PrismaClient, Medicine} from '@prisma/client'

export class MedicineService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: MedicineService;

  public static getInstance(): MedicineService {
    if (!MedicineService.instance) {
      MedicineService.instance = new MedicineService();
    }
    return MedicineService.instance;
  }


  public async getMedicines(): Promise<Medicine[]> {
    try {
      return await this.prisma.medicine.findMany();
    } catch (error) {
      console.error("Error fetching medicines: ", error)
      return []
    }
  }

  public async getMedicineById(id: number): Promise<Medicine | null> {
    try {
      return await this.prisma.medicine.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching medicine: ", error)
      return null
    }
  }

  public async addMedicine(medicine: Medicine): Promise<Medicine | null> {
    try {
      return await this.prisma.medicine.create({
        data: medicine
      });
    } catch (error) {
      console.error("Error adding medicine: ", error)
      return null
    }

  }

  public async deleteMedicine(id: number): Promise<Medicine | null> {
    try {
      const medicine = await this.getMedicineById(id)
      if (!medicine) {
        console.error(`Medicine with id: ${id} not found`)
        return null
      }
      return await this.prisma.medicine.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting medicine: ", error)
      return null
    }
  }

  public async updateMedicine(medicineId: number, medicineData: Medicine): Promise<Medicine | null> {
    try {
      return await this.prisma.medicine.update({
        data: medicineData,
        where: {id: medicineId}
      });
    } catch (error) {
      console.error("Error updating medicine: ", error)
      return null
    }
  }
}
