import {PrismaClient, Specialty} from '@prisma/client'

export class SpecialtyService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: SpecialtyService;

  public static getInstance(): SpecialtyService {
    if (!SpecialtyService.instance) {
      SpecialtyService.instance = new SpecialtyService();
    }
    return SpecialtyService.instance;
  }


  public async getSpecialties(): Promise<Specialty[]> {
    try {
      return await this.prisma.specialty.findMany();
    } catch (error) {
      console.error("Error fetching specialties: ", error)
      return []
    }
  }

  public async getSpecialtyById(specialtyCode: number): Promise<Specialty | null> {
    try {
      return await this.prisma.specialty.findUnique({
        where: {code: specialtyCode}
      });
    } catch (error) {
      console.error("Error fetching specialty: ", error)
      return null
    }
  }

  public async addSpecialty(specialty: Specialty): Promise<Specialty | null> {
    try {
      return await this.prisma.specialty.create({
        data: specialty
      });
    } catch (error) {
      console.error("Error adding specialty: ", error)
      return null
    }

  }

  public async deleteSpecialty(specialtyCode: number): Promise<Specialty | null> {
    try {
      const specialty = await this.getSpecialtyById(specialtyCode)
      if (!specialty) {
        console.error(`Specialty with id: ${specialtyCode} not found`)
        return null
      }
      return await this.prisma.specialty.delete({
        where: {code: specialtyCode}
      });
    } catch (error) {
      console.error("Error deleting specialty: ", error)
      return null
    }
  }

  public async updateSpecialty(specialtyCode: number, specialtyData: Specialty): Promise<Specialty | null> {
    try {
      return await this.prisma.specialty.update({
        data: specialtyData,
        where: {code: specialtyCode}
      });
    } catch (error) {
      console.error("Error updating specialty: ", error)
      return null
    }
  }
}
