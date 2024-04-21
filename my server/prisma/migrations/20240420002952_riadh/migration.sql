/*
  Warnings:

  - You are about to alter the column `image` on the `post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1000)` to `VarChar(191)`.
  - You are about to drop the `commentpost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `commentpost` DROP FOREIGN KEY `CommentPost_postId_fkey`;

-- DropForeignKey
ALTER TABLE `commentpost` DROP FOREIGN KEY `CommentPost_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- AlterTable
ALTER TABLE `post` MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `userId` INTEGER NULL;

-- DropTable
DROP TABLE `commentpost`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
