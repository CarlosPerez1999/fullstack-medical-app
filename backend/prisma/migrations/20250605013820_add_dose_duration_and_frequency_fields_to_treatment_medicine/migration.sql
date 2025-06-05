/*
  Warnings:

  - You are about to drop the column `dose` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `durationUnit` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `frequency` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `frequencyUnit` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `observations` on the `Treatment` table. All the data in the column will be lost.
  - Added the required column `dose` to the `TreatmentMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `TreatmentMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequency` to the `TreatmentMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `observations` to the `TreatmentMedicine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treatment" DROP COLUMN "dose",
DROP COLUMN "duration",
DROP COLUMN "durationUnit",
DROP COLUMN "frequency",
DROP COLUMN "frequencyUnit",
DROP COLUMN "observations";

-- AlterTable
ALTER TABLE "TreatmentMedicine" ADD COLUMN     "dose" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "durationUnit" "TimeUnit" NOT NULL DEFAULT 'DAY',
ADD COLUMN     "frequency" INTEGER NOT NULL,
ADD COLUMN     "frequencyUnit" "TimeUnit" NOT NULL DEFAULT 'DAY',
ADD COLUMN     "observations" TEXT NOT NULL;
