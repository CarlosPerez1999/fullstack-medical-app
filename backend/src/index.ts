import express from 'express'
import cors from 'cors'
import PatientRoutes from "./routes/patient.routes";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/patients", PatientRoutes)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})