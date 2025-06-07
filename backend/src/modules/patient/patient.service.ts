import {PrismaClient, Patient} from '@prisma/client'

export class PatientService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: PatientService;

  public static getInstance(): PatientService {
    if (!PatientService.instance) {
      PatientService.instance = new PatientService();
    }
    return PatientService.instance;
  }


  public async getPatients(): Promise<Patient[]> {
    try {
      return await this.prisma.patient.findMany();
    } catch (error) {
      console.error("Error fetching patients: ", error)
      return []
    }
  }

  public async getPatientById(id: number): Promise<Patient | null> {
    try {
      return await this.prisma.patient.findUnique({
        where: {id},
        include: {
          allergy: {include: {allergy: true}},
        }
      });
    } catch (error) {
      console.error("Error fetching patient: ", error)
      return null
    }
  }

  public async addPatient(patient: Patient): Promise<Patient | null> {
    try {
      return await this.prisma.patient.create({
        data: patient
      });
    } catch (error) {
      console.error("Error adding patient: ", error)
      return null
    }

  }

  public async deletePatient(id: number): Promise<Patient | null> {
    try {
      const patient = await this.getPatientById(id)
      if (!patient) {
        console.error(`Patient with id: ${id} not found`)
        return null
      }
      return await this.prisma.patient.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting patient: ", error)
      return null
    }
  }

  public async updatePatient(patientId: number, patientData: Patient): Promise<Patient | null> {
    try {
      return await this.prisma.patient.update({
        data: patientData,
        where: {id: patientId}
      });
    } catch (error) {
      console.error("Error updating patient: ", error)
      return null
    }
  }
}
