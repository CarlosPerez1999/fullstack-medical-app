import express from 'express'
import cors from 'cors'
import PatientRoutes from "./routes/patient.routes";
import DoctorRoutes from "./routes/doctor.routes";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/patients", PatientRoutes)
app.use("/doctors", DoctorRoutes)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})