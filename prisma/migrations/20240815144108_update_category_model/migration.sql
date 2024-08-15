/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Made the column `categoryId` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "post" ADD COLUMN     "categoryName" TEXT,
ALTER COLUMN "categoryId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "category"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;
