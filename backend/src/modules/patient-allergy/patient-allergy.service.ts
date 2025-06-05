import {PrismaClient, PatientAllergy} from '@prisma/client'

export class PatientAllergyService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: PatientAllergyService;

  public static getInstance(): PatientAllergyService {
    if (!PatientAllergyService.instance) {
      PatientAllergyService.instance = new PatientAllergyService();
    }
    return PatientAllergyService.instance;
  }


  public async getPatientAllergies(): Promise<PatientAllergy[]> {
    try {
      return await this.prisma.patientAllergy.findMany();
    } catch (error) {
      console.error("Error fetching patientAllergies: ", error)
      return []
    }
  }

  public async addPatientAllergy(patientAllergy: PatientAllergy): Promise<PatientAllergy | null> {
    try {
      return await this.prisma.patientAllergy.create({
        data: patientAllergy
      });
    } catch (error) {
      console.error("Error adding patientAllergy: ", error)
      return null
    }

  }

  public async deletePatientAllergy(id: number): Promise<PatientAllergy | null> {
    try {
      const patientAllergy = await this.prisma.patientAllergy.findUnique({where: {id}})
      if (!patientAllergy) {
        console.error(`PatientAllergy with id: ${id} not found`)
        return null
      }
      return await this.prisma.patientAllergy.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting patientAllergy: ", error)
      return null
    }
  }

  public async updatePatientAllergy(patientAllergyId: number, patientAllergyData: PatientAllergy): Promise<PatientAllergy | null> {
    try {
      return await this.prisma.patientAllergy.update({
        data: patientAllergyData,
        where: {id: patientAllergyId}
      });
    } catch (error) {
      console.error("Error updating patientAllergy: ", error)
      return null
    }
  }
}
