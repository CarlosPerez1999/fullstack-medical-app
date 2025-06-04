import {PrismaClient, Consult} from '@prisma/client'

export class ConsultService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: ConsultService;

  public static getInstance(): ConsultService {
    if (!ConsultService.instance) {
      ConsultService.instance = new ConsultService();
    }
    return ConsultService.instance;
  }


  public async getConsults(): Promise<Consult[]> {
    try {
      return await this.prisma.consult.findMany();
    } catch (error) {
      console.error("Error fetching consults: ", error)
      return []
    }
  }

  public async getConsultById(id: number): Promise<Consult | null> {
    try {
      return await this.prisma.consult.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching consult: ", error)
      return null
    }
  }

  public async addConsult(consult: Consult): Promise<Consult | null> {
    try {
      return await this.prisma.consult.create({
        data: consult
      });
    } catch (error) {
      console.error("Error adding consult: ", error)
      return null
    }

  }

  public async deleteConsult(id: number): Promise<Consult | null> {
    try {
      const consult = await this.getConsultById(id)
      if (!consult) {
        console.error(`Consult with id: ${id} not found`)
        return null
      }
      return await this.prisma.consult.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting consult: ", error)
      return null
    }
  }

  public async updateConsult(consultId: number, consultData: Consult): Promise<Consult | null> {
    try {
      return await this.prisma.consult.update({
        data: consultData,
        where: {id: consultId}
      });
    } catch (error) {
      console.error("Error updating consult: ", error)
      return null
    }
  }
}
