import express from 'express'
import cors from 'cors'
import PatientRoutes from "./modules/patient/patient.routes";
import DoctorRoutes from "./modules/doctor/doctor.routes";
import AppointmentRoutes from "./modules/appointment/appointment.routes";
import TreatmentRoutes from "./modules/treatment/treatment.routes";
import ConsultRoutes from "./modules/consult/consult.routes";
import RoomRoutes from "./modules/room/room.routes";
import MedicineRoutes from "./modules/medicine/medicine.routes";
import HospitalizationRoutes from "./modules/hospitalization/hospitalization.routes";
import UserRoutes from "./modules/user/user.routes";
import AllergyRoutes from "./modules/allergy/allergy.routes";
import TreatmentMedicineRoutes from "./modules/treatment-medicine/treatment-medicine.routes";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", UserRoutes)
app.use("/patients", PatientRoutes)
app.use("/doctors", DoctorRoutes)
app.use("/appointments", AppointmentRoutes)
app.use("/treatments", TreatmentRoutes)
app.use("/consults", ConsultRoutes)
app.use("/medicines", MedicineRoutes)
app.use("/rooms", RoomRoutes)
app.use("/hospitalizations", HospitalizationRoutes)
app.use("/allergies", AllergyRoutes)
app.use("/treatment-medicine", TreatmentMedicineRoutes)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})