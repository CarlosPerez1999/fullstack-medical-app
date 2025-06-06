import PatientRoutes from "../modules/patient/patient.routes";
import DoctorRoutes from "../modules/doctor/doctor.routes";
import AppointmentRoutes from "../modules/appointment/appointment.routes";
import TreatmentRoutes from "../modules/treatment/treatment.routes";
import ConsultRoutes from "../modules/consult/consult.routes";
import RoomRoutes from "../modules/room/room.routes";
import MedicineRoutes from "../modules/medicine/medicine.routes";
import HospitalizationRoutes from "../modules/hospitalization/hospitalization.routes";
import UserRoutes from "../modules/user/user.routes";
import AllergyRoutes from "../modules/allergy/allergy.routes";
import TreatmentMedicineRoutes from "../modules/treatment-medicine/treatment-medicine.routes";
import PharmaceuticalFormRoutes from "../modules/pharmaceutical-form/pharmaceutical-form.routes";
import PatientAllergyRoutes from "../modules/patient-allergy/patient-allergy.routes";
import SpecialtyRoutes from "../modules/specialty/specialty.routes";
import DoctorSpecialtyRoutes from "../modules/doctor-specialty/doctor-specialty.routes";

export const routes = [
  {path: "/users", route: UserRoutes},
  {path: "/patients", route: PatientRoutes},
  {path: "/doctors", route: DoctorRoutes},
  {path: "/appointments", route: AppointmentRoutes},
  {path: "/treatments", route: TreatmentRoutes},
  {path: "/consults", route: ConsultRoutes},
  {path: "/medicines", route: MedicineRoutes},
  {path: "/rooms", route: RoomRoutes},
  {path: "/hospitalizations", route: HospitalizationRoutes},
  {path: "/allergies", route: AllergyRoutes},
  {path: "/treatment-medicine", route: TreatmentMedicineRoutes},
  {path: "/pharmaceutical-forms", route: PharmaceuticalFormRoutes},
  {path: "/patient-allergies", route: PatientAllergyRoutes},
  {path: "/specialties", route: SpecialtyRoutes},
  {path: "/doctor-specialties", route: DoctorSpecialtyRoutes},
] 