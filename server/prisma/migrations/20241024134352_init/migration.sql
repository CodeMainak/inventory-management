/*
  Warnings:

  - Made the column `changePercentage` on table `PurchaseSummary` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" ALTER COLUMN "changePercentage" SET NOT NULL;
