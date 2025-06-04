import {PrismaClient, Doctor} from '@prisma/client'

export class DoctorService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: DoctorService;

  public static getInstance(): DoctorService {
    if (!DoctorService.instance) {
      DoctorService.instance = new DoctorService();
    }
    return DoctorService.instance;
  }


  public async getDoctors(): Promise<Doctor[]> {
    try {
      return await this.prisma.doctor.findMany();
    } catch (error) {
      console.error("Error fetching doctors: ", error)
      return []
    }
  }

  public async getDoctorById(id: number): Promise<Doctor | null> {
    try {
      return await this.prisma.doctor.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching doctor: ", error)
      return null
    }
  }

  public async addDoctor(doctor: Doctor): Promise<Doctor | null> {
    try {
      return await this.prisma.doctor.create({
        data: doctor
      });
    } catch (error) {
      console.error("Error adding doctor: ", error)
      return null
    }

  }

  public async deleteDoctor(id: number): Promise<Doctor | null> {
    try {
      const doctor = await this.getDoctorById(id)
      if (!doctor) {
        console.error(`Doctor with id: ${id} not found`)
        return null
      }
      return await this.prisma.doctor.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting doctor: ", error)
      return null
    }
  }

  public async updateDoctor(doctorId: number, doctorData: Doctor): Promise<Doctor | null> {
    try {
      return await this.prisma.doctor.update({
        data: doctorData,
        where: {id: doctorId}
      });
    } catch (error) {
      console.error("Error updating doctor: ", error)
      return null
    }
  }
}
