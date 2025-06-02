import {PrismaClient, Appointment} from '@prisma/client'

export class AppointmentService {
  private prisma: PrismaClient = new PrismaClient();

  private constructor() {
  }

  private static instance: AppointmentService;

  public static getInstance(): AppointmentService {
    if (!AppointmentService.instance) {
      AppointmentService.instance = new AppointmentService();
    }
    return AppointmentService.instance;
  }


  public async getAppointments(): Promise<Appointment[]> {
    try {
      return await this.prisma.appointment.findMany();
    } catch (error) {
      console.error("Error fetching appointments: ", error)
      return []
    }
  }

  public async getAppointmentById(id: number): Promise<Appointment | null> {
    try {
      return await this.prisma.appointment.findUnique({
        where: {id}
      });
    } catch (error) {
      console.error("Error fetching appointment: ", error)
      return null
    }
  }

  public async addAppointment(appointment: Appointment): Promise<Appointment | null> {
    try {
      return await this.prisma.appointment.create({
        data: appointment
      });
    } catch (error) {
      console.error("Error adding appointment: ", error)
      return null
    }

  }

  public async deleteAppointment(id: number): Promise<Appointment | null> {
    try {
      const appointment = await this.getAppointmentById(id)
      if (!appointment) {
        console.error(`Appointment with id: ${id} not found`)
        return null
      }
      return await this.prisma.appointment.delete({
        where: {id}
      });
    } catch (error) {
      console.error("Error deleting appointment: ", error)
      return null
    }
  }

  public async updateAppointment(appointmentId: number, appointmentData: Appointment): Promise<Appointment | null> {
    try {
      return await this.prisma.appointment.update({
        data: appointmentData,
        where: {id: appointmentId}
      });
    } catch (error) {
      console.error("Error updating appointment: ", error)
      return null
    }
  }
}
