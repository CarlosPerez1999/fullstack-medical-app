import {PrismaClient, Treatment} from '@prisma/client'

export class TreatmentService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: TreatmentService;

  public static getInstance(): TreatmentService {
    if (!TreatmentService.instance) {
      TreatmentService.instance = new TreatmentService();
    }
    return TreatmentService.instance;
  }


  public async getTreatments(): Promise<Treatment[]> {
    try {
      return await this.prisma.treatment.findMany();
    } catch (error) {
      console.error("Error fetching treatments: ", error)
      return []
    }
  }

  public async getTreatmentById(id: number): Promise<Treatment | null> {
    try {
      return await this.prisma.treatment.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching treatment: ", error)
      return null
    }
  }

  public async addTreatment(treatment: Treatment): Promise<Treatment | null> {
    try {
      return await this.prisma.treatment.create({
        data: treatment
      });
    } catch (error) {
      console.error("Error adding treatment: ", error)
      return null
    }

  }

  public async deleteTreatment(id: number): Promise<Treatment | null> {
    try {
      const treatment = await this.getTreatmentById(id)
      if (!treatment) {
        console.error(`Treatment with id: ${id} not found`)
        return null
      }
      return await this.prisma.treatment.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting treatment: ", error)
      return null
    }
  }

  public async updateTreatment(treatmentId: number, treatmentData: Treatment): Promise<Treatment | null> {
    try {
      return await this.prisma.treatment.update({
        data: treatmentData,
        where: {id: treatmentId}
      });
    } catch (error) {
      console.error("Error updating treatment: ", error)
      return null
    }
  }
}
