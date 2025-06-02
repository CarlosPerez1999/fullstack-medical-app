import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../utils/validation";

export class AppointmentController {
  private appointmentService: AppointmentService = AppointmentService.getInstance()

  public async getAppointments(req: Request, res: Response) {
    try {
      const appointments: Appointment[] = await this.appointmentService.getAppointments()
      return res.status(200).json(appointments)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching appointments: ${error}`
      })
    }
  }

  public async getAppointmentById(req: Request, res: Response) {
    try {
      const appointmentId = parseValidNumericId(req.params.id)
      if (appointmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid appointment id`
        })
      }
      const appointment: Appointment | null = await this.appointmentService.getAppointmentById(appointmentId)
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment with id: ${appointmentId} not found`
        })
      }
      return res.status(200).json(appointment)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching appointment: ${error}`
      })
    }
  }

  public async addAppointment(req: Request, res: Response) {
    try {
      const appointment_data: Appointment = req.body
      const appointment: Appointment | null = await this.appointmentService.addAppointment(appointment_data)
      return res.status(201).json(appointment)
    } catch (error) {
      res.status(500).json({message: `Error adding appointment: ${error}`});

    }
  }

  public async deleteAppointment(req: Request, res: Response) {
    try {
      const appointmentId = parseValidNumericId(req.params.id)
      if (appointmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid appointment id`
        })
      }
      const appointment: Appointment | null = await this.appointmentService.deleteAppointment(appointmentId)
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment with id: ${appointmentId} not found`
        })
      }
      return res.status(200).json(appointment)
    } catch (error) {
      res.status(500).json({message: `Error deleting appointment: ${error}`});
    }
  }

  public async updateAppointment(req: Request, res: Response) {
    try {
      const appointmentId = parseValidNumericId(req.params.id)
      if (appointmentId === null) {
        return res.status(400).json({
          message: `Param id is not a valid appointment id`
        })
      }
      const appointmentData: Appointment = req.body
      const appointment: Appointment | null = await this.appointmentService.updateAppointment(appointmentId, appointmentData)
      if (!appointment) {
        return res.status(404).json({
          message: `Appointment with id: ${appointmentId} not found`
        })
      }
      return res.status(200).json(appointment)
    } catch (error) {
      res.status(500).json({message: `Error updating appointment: ${error}`});
    }
  }

}