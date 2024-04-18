/*
  Warnings:

  - Made the column `imageUrl` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `imageUrl` VARCHAR(1000) NOT NULL;
