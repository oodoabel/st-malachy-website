/*
  Warnings:

  - The primary key for the `profile` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "profile" DROP CONSTRAINT "profile_pkey",
ALTER COLUMN "paymentStatus" SET DEFAULT 'unpaid',
ALTER COLUMN "paymentStatus" SET DATA TYPE TEXT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "forum" SET DATA TYPE TEXT,
ADD CONSTRAINT "profile_pkey" PRIMARY KEY ("id");
