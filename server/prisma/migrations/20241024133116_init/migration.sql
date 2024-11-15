/*
  Warnings:

  - You are about to drop the column `productsProductId` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `totalCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_productsProductId_fkey";

-- AlterTable
ALTER TABLE "PurchaseSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "productsProductId";

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
