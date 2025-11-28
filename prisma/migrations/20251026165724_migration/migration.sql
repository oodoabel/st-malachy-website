/*
  Warnings:

  - The `forum` column on the `profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `id` on the `profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
DROP COLUMN "forum",
ADD COLUMN     "forum" INTEGER,
ADD CONSTRAINT "profile_pkey" PRIMARY KEY ("id");
