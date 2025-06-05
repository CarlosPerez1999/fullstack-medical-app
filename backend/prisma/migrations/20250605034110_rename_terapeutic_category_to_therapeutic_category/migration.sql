/*
  Warnings:

  - You are about to drop the column `teraputicCategoryid` on the `Medicine` table. All the data in the column will be lost.
  - You are about to drop the `TerapeuticCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `theraputicCategoryid` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_teraputicCategoryid_fkey";

-- AlterTable
ALTER TABLE "Medicine" DROP COLUMN "teraputicCategoryid",
ADD COLUMN     "theraputicCategoryid" INTEGER NOT NULL;

-- DropTable
DROP TABLE "TerapeuticCategory";

-- CreateTable
CREATE TABLE "TherapeuticCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TherapeuticCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Medicine" ADD CONSTRAINT "Medicine_theraputicCategoryid_fkey" FOREIGN KEY ("theraputicCategoryid") REFERENCES "TherapeuticCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
