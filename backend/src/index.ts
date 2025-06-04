import express from 'express'
import cors from 'cors'
import PatientRoutes from "./modules/patient/patient.routes";
import DoctorRoutes from "./modules/doctor/doctor.routes";
import AppointmentRoutes from "./routes/appointment.routes";
import TreatmentRoutes from "./routes/treatment.routes";
import ConsultRoutes from "./modules/consult/consult.routes";
import RoomRoutes from "./routes/room.routes";
import MedicineRoutes from "./routes/medicine.routes";
import HospitalizationRoutes from "./routes/hospitalization.routes";
import UserRoutes from "./routes/user.routes";
import AllergyRoutes from "./routes/allergy.routes";

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

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})