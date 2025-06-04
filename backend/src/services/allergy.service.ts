import {PrismaClient, Allergy} from '@prisma/client'

export class AllergyService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: AllergyService;

  public static getInstance(): AllergyService {
    if (!AllergyService.instance) {
      AllergyService.instance = new AllergyService();
    }
    return AllergyService.instance;
  }


  public async getAllergies(): Promise<Allergy[]> {
    try {
      return await this.prisma.allergy.findMany();
    } catch (error) {
      console.error("Error fetching allergies: ", error)
      return []
    }
  }

  public async getAllergyById(id: number): Promise<Allergy | null> {
    try {
      return await this.prisma.allergy.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching allergy: ", error)
      return null
    }
  }

  public async addAllergy(allergy: Allergy): Promise<Allergy | null> {
    try {
      return await this.prisma.allergy.create({
        data: allergy
      });
    } catch (error) {
      console.error("Error adding allergy: ", error)
      return null
    }

  }

  public async deleteAllergy(id: number): Promise<Allergy | null> {
    try {
      const allergy = await this.getAllergyById(id)
      if (!allergy) {
        console.error(`Allergy with id: ${id} not found`)
        return null
      }
      return await this.prisma.allergy.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting allergy: ", error)
      return null
    }
  }

  public async updateAllergy(allergyId: number, allergyData: Allergy): Promise<Allergy | null> {
    try {
      return await this.prisma.allergy.update({
        data: allergyData,
        where: {id: allergyId}
      });
    } catch (error) {
      console.error("Error updating allergy: ", error)
      return null
    }
  }
}
