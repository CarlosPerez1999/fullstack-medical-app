-- CreateEnum
CREATE TYPE "BloodType" AS ENUM ('A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG');

-- CreateEnum
CREATE TYPE "RoomState" AS ENUM ('OCCUPIED', 'FREE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('SINGLE', 'DOUBLE');

-- CreateEnum
CREATE TYPE "AppointmentState" AS ENUM ('PENDING', 'MADE', 'CANCELED');

-- CreateEnum
CREATE TYPE "TimeUnit" AS ENUM ('MINUTE', 'HOUR', 'DAY', 'MONTH', 'YEAR');

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "insurance_num" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "paternalSurname" TEXT NOT NULL,
    "maternalSurname" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bloodType" "BloodType" NOT NULL DEFAULT 'O_POS',

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientAllergy" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "allergyId" INTEGER NOT NULL,

    CONSTRAINT "PatientAllergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospitalization" (
    "id" SERIAL NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "dischargeDate" TIMESTAMP(3),
    "reason" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,
    "roomNumber" INTEGER NOT NULL,

    CONSTRAINT "Hospitalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "number" SERIAL NOT NULL,
    "type" "RoomType" NOT NULL DEFAULT 'SINGLE',
    "floor" TEXT NOT NULL,
    "state" "RoomState" NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "professionalID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "paternalSurname" TEXT NOT NULL,
    "maternalSurname" TEXT NOT NULL,
    "yearsOfExp" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorSpeciality" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "specialityId" INTEGER NOT NULL,

    CONSTRAINT "DoctorSpeciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speciality" (
    "code" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "state" "AppointmentState" NOT NULL DEFAULT 'PENDING',
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consult" (
    "id" SERIAL NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "treatmentId" INTEGER NOT NULL,

    CONSTRAINT "Consult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Treatment" (
    "id" SERIAL NOT NULL,
    "dose" DECIMAL(65,30) NOT NULL,
    "frequency" INTEGER NOT NULL,
    "frequencyUnit" "TimeUnit" NOT NULL DEFAULT 'DAY',
    "duration" INTEGER NOT NULL,
    "durationUnit" "TimeUnit" NOT NULL DEFAULT 'DAY',
    "observations" TEXT NOT NULL,

    CONSTRAINT "Treatment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentMedicine" (
    "id" SERIAL NOT NULL,
    "treatmentId" INTEGER NOT NULL,
    "medicineId" INTEGER NOT NULL,

    CONSTRAINT "TreatmentMedicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "tradeName" TEXT NOT NULL,
    "activeIngredient" TEXT NOT NULL,
    "laboratory" TEXT NOT NULL,
    "contraindications" TEXT,
    "concentration" INTEGER NOT NULL,
    "recommendedDosage" INTEGER NOT NULL,
    "teraputicCategoryid" INTEGER NOT NULL,
    "pharmaceuticalFormid" INTEGER NOT NULL,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TerapeuticCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TerapeuticCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmaceuticalForm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PharmaceuticalForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_insurance_num_key" ON "Patient"("insurance_num");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_professionalID_key" ON "Doctor"("professionalID");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Speciality_name_key" ON "Speciality"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Consult_appointmentId_key" ON "Consult"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Consult_treatmentId_key" ON "Consult"("treatmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Medicine_code_key" ON "Medicine"("code");

-- AddForeignKey
ALTER TABLE "PatientAllergy" ADD CONSTRAINT "PatientAllergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientAllergy" ADD CONSTRAINT "PatientAllergy_allergyId_fkey" FOREIGN KEY ("allergyId") REFERENCES "Allergy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospitalization" ADD CONSTRAINT "Hospitalization_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospitalization" ADD CONSTRAINT "Hospitalization_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSpeciality" ADD CONSTRAINT "DoctorSpeciality_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorSpeciality" ADD CONSTRAINT "DoctorSpeciality_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consult" ADD CONSTRAINT "Consult_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consult" ADD CONSTRAINT "Consult_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentMedicine" ADD CONSTRAINT "TreatmentMedicine_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentMedicine" ADD CONSTRAINT "TreatmentMedicine_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_teraputicCategoryid_fkey" FOREIGN KEY ("teraputicCategoryid") REFERENCES "TerapeuticCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_pharmaceuticalFormid_fkey" FOREIGN KEY ("pharmaceuticalFormid") REFERENCES "PharmaceuticalForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
