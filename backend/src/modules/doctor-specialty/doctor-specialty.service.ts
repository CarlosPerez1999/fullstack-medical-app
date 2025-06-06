import {PrismaClient, DoctorSpecialty} from '@prisma/client'

export class DoctorSpecialtyService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: DoctorSpecialtyService;

  public static getInstance(): DoctorSpecialtyService {
    if (!DoctorSpecialtyService.instance) {
      DoctorSpecialtyService.instance = new DoctorSpecialtyService();
    }
    return DoctorSpecialtyService.instance;
  }


  public async getDoctorSpecialties(): Promise<DoctorSpecialty[]> {
    try {
      return await this.prisma.doctorSpecialty.findMany();
    } catch (error) {
      console.error("Error fetching doctorSpecialties: ", error)
      return []
    }
  }

  public async addDoctorSpecialty(doctorSpecialty: DoctorSpecialty): Promise<DoctorSpecialty | null> {
    try {
      return await this.prisma.doctorSpecialty.create({
        data: doctorSpecialty
      });
    } catch (error) {
      console.error("Error adding doctorSpecialty: ", error)
      return null
    }

  }

  public async deleteDoctorSpecialty(id: number): Promise<DoctorSpecialty | null> {
    try {
      const doctorSpecialty = await this.prisma.doctorSpecialty.findUnique({where: {id}})
      if (!doctorSpecialty) {
        console.error(`DoctorSpecialty with id: ${id} not found`)
        return null
      }
      return await this.prisma.doctorSpecialty.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting doctorSpecialty: ", error)
      return null
    }
  }

  public async updateDoctorSpecialty(doctorSpecialtyId: number, doctorSpecialtyData: DoctorSpecialty): Promise<DoctorSpecialty | null> {
    try {
      return await this.prisma.doctorSpecialty.update({
        data: doctorSpecialtyData,
        where: {id: doctorSpecialtyId}
      });
    } catch (error) {
      console.error("Error updating doctorSpecialty: ", error)
      return null
    }
  }
}
