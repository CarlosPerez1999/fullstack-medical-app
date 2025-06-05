import {PrismaClient, TherapeuticCategory} from '@prisma/client'

export class TherapeuticCategoryService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: TherapeuticCategoryService;

  public static getInstance(): TherapeuticCategoryService {
    if (!TherapeuticCategoryService.instance) {
      TherapeuticCategoryService.instance = new TherapeuticCategoryService();
    }
    return TherapeuticCategoryService.instance;
  }


  public async getTherapeuticCategories(): Promise<TherapeuticCategory[]> {
    try {
      return await this.prisma.therapeuticCategory.findMany();
    } catch (error) {
      console.error("Error fetching therapeuticCategories: ", error)
      return []
    }
  }

  public async getTherapeuticCategoryById(id: number): Promise<TherapeuticCategory | null> {
    try {
      return await this.prisma.therapeuticCategory.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching therapeuticCategory: ", error)
      return null
    }
  }

  public async addTherapeuticCategory(therapeuticCategory: TherapeuticCategory): Promise<TherapeuticCategory | null> {
    try {
      return await this.prisma.therapeuticCategory.create({
        data: therapeuticCategory
      });
    } catch (error) {
      console.error("Error adding therapeuticCategory: ", error)
      return null
    }

  }

  public async deleteTherapeuticCategory(id: number): Promise<TherapeuticCategory | null> {
    try {
      const therapeuticCategory = await this.getTherapeuticCategoryById(id)
      if (!therapeuticCategory) {
        console.error(`TherapeuticCategory with id: ${id} not found`)
        return null
      }
      return await this.prisma.therapeuticCategory.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting therapeuticCategory: ", error)
      return null
    }
  }

  public async updateTherapeuticCategory(therapeuticCategoryId: number, therapeuticCategoryData: TherapeuticCategory): Promise<TherapeuticCategory | null> {
    try {
      return await this.prisma.therapeuticCategory.update({
        data: therapeuticCategoryData,
        where: {id: therapeuticCategoryId}
      });
    } catch (error) {
      console.error("Error updating therapeuticCategory: ", error)
      return null
    }
  }
}
