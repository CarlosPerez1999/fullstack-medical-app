import {PharmaceuticalFormService} from "./pharmaceutical-form.service";
import {PharmaceuticalForm} from "@prisma/client";
import {Request, Response} from "express";
import {parseValidNumericId} from "../../utils/validation";

export class PharmaceuticalFormController {
  private pharmaceuticalFormService: PharmaceuticalFormService = PharmaceuticalFormService.getInstance()

  public async getPharmaceuticalForms(req: Request, res: Response) {
    try {
      const pharmaceuticalForms: PharmaceuticalForm[] = await this.pharmaceuticalFormService.getPharmaceuticalForms()
      return res.status(200).json(pharmaceuticalForms)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching pharmaceuticalForms: ${error}`
      })
    }
  }

  public async getPharmaceuticalFormById(req: Request, res: Response) {
    try {
      const pharmaceuticalFormId = parseValidNumericId(req.params.id)
      if (pharmaceuticalFormId === null) {
        return res.status(400).json({
          message: `Param id is not a valid pharmaceuticalForm id`
        })
      }
      const pharmaceuticalForm: PharmaceuticalForm | null = await this.pharmaceuticalFormService.getPharmaceuticalFormById(pharmaceuticalFormId)
      if (!pharmaceuticalForm) {
        return res.status(404).json({
          message: `PharmaceuticalForm with id: ${pharmaceuticalFormId} not found`
        })
      }
      return res.status(200).json(pharmaceuticalForm)
    } catch (error) {
      res.status(500).json({
        message: `Error fetching pharmaceuticalForm: ${error}`
      })
    }
  }

  public async addPharmaceuticalForm(req: Request, res: Response) {
    try {
      const pharmaceuticalForm_data: PharmaceuticalForm = req.body
      const pharmaceuticalForm: PharmaceuticalForm | null = await this.pharmaceuticalFormService.addPharmaceuticalForm(pharmaceuticalForm_data)
      return res.status(201).json(pharmaceuticalForm)
    } catch (error) {
      res.status(500).json({message: `Error adding pharmaceuticalForm: ${error}`});

    }
  }

  public async deletePharmaceuticalForm(req: Request, res: Response) {
    try {
      const pharmaceuticalFormId = parseValidNumericId(req.params.id)
      if (pharmaceuticalFormId === null) {
        return res.status(400).json({
          message: `Param id is not a valid pharmaceuticalForm id`
        })
      }
      const pharmaceuticalForm: PharmaceuticalForm | null = await this.pharmaceuticalFormService.deletePharmaceuticalForm(pharmaceuticalFormId)
      if (!pharmaceuticalForm) {
        return res.status(404).json({
          message: `PharmaceuticalForm with id: ${pharmaceuticalFormId} not found`
        })
      }
      return res.status(200).json(pharmaceuticalForm)
    } catch (error) {
      res.status(500).json({message: `Error deleting pharmaceuticalForm: ${error}`});
    }
  }

  public async updatePharmaceuticalForm(req: Request, res: Response) {
    try {
      const pharmaceuticalFormId = parseValidNumericId(req.params.id)
      if (pharmaceuticalFormId === null) {
        return res.status(400).json({
          message: `Param id is not a valid pharmaceuticalForm id`
        })
      }
      const pharmaceuticalFormData: PharmaceuticalForm = req.body
      const pharmaceuticalForm: PharmaceuticalForm | null = await this.pharmaceuticalFormService.updatePharmaceuticalForm(pharmaceuticalFormId, pharmaceuticalFormData)
      if (!pharmaceuticalForm) {
        return res.status(404).json({
          message: `PharmaceuticalForm with id: ${pharmaceuticalFormId} not found`
        })
      }
      return res.status(200).json(pharmaceuticalForm)
    } catch (error) {
      res.status(500).json({message: `Error updating pharmaceuticalForm: ${error}`});
    }
  }

}