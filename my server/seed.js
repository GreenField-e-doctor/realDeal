// seed.js

const { PrismaClient } = require('@prisma/client');

// Create an instance of PrismaClient
const prisma = new PrismaClient();


// Define your seed data
const seedData = [
  
        {
          "UncommenRare": 1468,
          "price": 420,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681534865221_gp1b1cdn8bcm3no1ajlq5zumhx5957y2_400x400.webp",
          "genre": "Women",
          "status": "Available",
          "comingSoon": ""
        },
        {
          "UncommenRare": 9531,
          "price": 120,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681535798149_npasij04nhyodzsuozpoic6xbijs4x65_400x400.webp",
          "genre": "Men",
          "status": "Not Available",
          "comingSoon": ""
        },
        {
          "UncommenRare": 6978,
          "price": 55,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681535507313_t3it10idbfj3ntmqlep3lgyiic47fbxj_400x400.webp",
          "genre": "Women",
          "status": "Not Available",
          "comingSoon": ""
        },
        {
          "UncommenRare": 2193,
          "price": 100,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681534938327_mh7r3y6pc43w8vl2k44nzhev4ucnxodl_400x400.webp",
          "genre": "Men",
          "status": "Available",
          "comingSoon": "In One day"
        },
        {
          "UncommenRare": 1680,
          "price": 38,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681534875551_rdbeah0t2xlbcv9bhu08utok3sgggj47_400x400.webp",
          "genre": "Men",
          "status": "Not Available",
          "comingSoon": ""
        },
        {
          "UncommenRare": 9911,
          "price": 38,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681535831172_iwm0estv2ynbh67ypvnh0xhn8ycwltoa_400x400.webp",
          "genre": "Men",
          "status": "Available",
          "comingSoon": ""
        },
        {
          "UncommenRare": 2851,
          "price": 25,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681535024772_5087r7oofgkkoga2ohz6wr3ld5dkrl73_400x400.webp",
          "genre": "Men",
          "status": "Available",
          "comingSoon": "In three days"
        },
        {
          "UncommenRare": 4248,
          "price": 25,
          "imgUrl": "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1681535178685_q17vzppfrbpq5m9lfbwynq4lkcx8dfvc_400x400.webp",
          "genre": "Women",
          "status": "Available",
          "comingSoon": ""
        },
    
      ];
      


// Function to insert seed data
async function seedDatabase() {
  try {
    // Insert seed data into the database
    await prisma.nft.createMany({
      data: seedData,
    });
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  }
}


async function main() {
  try {
    const nfts = await prisma.nft.findMany();
    console.log('Retrieved NFTs:', nfts);
  } catch (error) {
    console.error('Error retrieving NFTs:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();


// Run the seed function
seedDatabase();
