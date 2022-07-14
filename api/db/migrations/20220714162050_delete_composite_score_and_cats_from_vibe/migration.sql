/*
  Warnings:

  - You are about to drop the column `compositeScore` on the `Vibe` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Vibe` table. All the data in the column will be lost.
  - You are about to drop the column `instrumentalness` on the `Vibe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vibe" DROP COLUMN "compositeScore",
DROP COLUMN "genre",
DROP COLUMN "instrumentalness";
