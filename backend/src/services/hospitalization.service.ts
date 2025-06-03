import {PrismaClient, Hospitalization} from '@prisma/client'

export class HospitalizationService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: HospitalizationService;

  public static getInstance(): HospitalizationService {
    if (!HospitalizationService.instance) {
      HospitalizationService.instance = new HospitalizationService();
    }
    return HospitalizationService.instance;
  }


  public async getHospitalizations(): Promise<Hospitalization[]> {
    try {
      return await this.prisma.hospitalization.findMany();
    } catch (error) {
      console.error("Error fetching hospitalizations: ", error)
      return []
    }
  }

  public async getHospitalizationById(id: number): Promise<Hospitalization | null> {
    try {
      return await this.prisma.hospitalization.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching hospitalization: ", error)
      return null
    }
  }

  public async addHospitalization(hospitalization: Hospitalization): Promise<Hospitalization | null> {
    try {
      return await this.prisma.hospitalization.create({
        data: hospitalization
      });
    } catch (error) {
      console.error("Error adding hospitalization: ", error)
      return null
    }

  }

  public async deleteHospitalization(id: number): Promise<Hospitalization | null> {
    try {
      const hospitalization = await this.getHospitalizationById(id)
      if (!hospitalization) {
        console.error(`Hospitalization with id: ${id} not found`)
        return null
      }
      return await this.prisma.hospitalization.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting hospitalization: ", error)
      return null
    }
  }

  public async updateHospitalization(hospitalizationId: number, hospitalizationData: Hospitalization): Promise<Hospitalization | null> {
    try {
      return await this.prisma.hospitalization.update({
        data: hospitalizationData,
        where: {id: hospitalizationId}
      });
    } catch (error) {
      console.error("Error updating hospitalization: ", error)
      return null
    }
  }
}
