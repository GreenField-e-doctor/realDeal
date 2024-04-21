/*
  Warnings:

  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `explore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nft` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `comment`;

-- DropTable
DROP TABLE `explore`;

-- DropTable
DROP TABLE `nft`;

-- CreateTable
CREATE TABLE `Nft` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UncommenRare` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `imgUrl` VARCHAR(1000) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `comingSoon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Explore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imgP` VARCHAR(1000) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `imgB` VARCHAR(1000) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
