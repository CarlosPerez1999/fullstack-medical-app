import {PrismaClient, PharmaceuticalForm} from '@prisma/client'

export class PharmaceuticalFormService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: PharmaceuticalFormService;

  public static getInstance(): PharmaceuticalFormService {
    if (!PharmaceuticalFormService.instance) {
      PharmaceuticalFormService.instance = new PharmaceuticalFormService();
    }
    return PharmaceuticalFormService.instance;
  }


  public async getPharmaceuticalForms(): Promise<PharmaceuticalForm[]> {
    try {
      return await this.prisma.pharmaceuticalForm.findMany();
    } catch (error) {
      console.error("Error fetching pharmaceuticalForms: ", error)
      return []
    }
  }

  public async getPharmaceuticalFormById(id: number): Promise<PharmaceuticalForm | null> {
    try {
      return await this.prisma.pharmaceuticalForm.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching pharmaceuticalForm: ", error)
      return null
    }
  }

  public async addPharmaceuticalForm(pharmaceuticalForm: PharmaceuticalForm): Promise<PharmaceuticalForm | null> {
    try {
      return await this.prisma.pharmaceuticalForm.create({
        data: pharmaceuticalForm
      });
    } catch (error) {
      console.error("Error adding pharmaceuticalForm: ", error)
      return null
    }

  }

  public async deletePharmaceuticalForm(id: number): Promise<PharmaceuticalForm | null> {
    try {
      const pharmaceuticalForm = await this.getPharmaceuticalFormById(id)
      if (!pharmaceuticalForm) {
        console.error(`PharmaceuticalForm with id: ${id} not found`)
        return null
      }
      return await this.prisma.pharmaceuticalForm.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting pharmaceuticalForm: ", error)
      return null
    }
  }

  public async updatePharmaceuticalForm(pharmaceuticalFormId: number, pharmaceuticalFormData: PharmaceuticalForm): Promise<PharmaceuticalForm | null> {
    try {
      return await this.prisma.pharmaceuticalForm.update({
        data: pharmaceuticalFormData,
        where: {id: pharmaceuticalFormId}
      });
    } catch (error) {
      console.error("Error updating pharmaceuticalForm: ", error)
      return null
    }
  }
}
