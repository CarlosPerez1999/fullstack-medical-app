import express from 'express'
import cors from 'cors'
import PatientRoutes from "./routes/patient.routes";
import DoctorRoutes from "./routes/doctor.routes";
import AppointmentRoutes from "./routes/appointment.routes";
import TreatmentRoutes from "./routes/treatment.routes";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/patients", PatientRoutes)
app.use("/doctors", DoctorRoutes)
app.use("/appointments", AppointmentRoutes)
app.use("/treatments", TreatmentRoutes)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})