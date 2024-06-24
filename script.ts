import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const user = await prisma.user.create({
//     data: {
//       name:'Alex',
//       email: 'alex@prisma.io'
//     },
//   })
//   console.log(user)
// }

// async function main() {
//   const users = await prisma.user.findMany()
//   console.log(users)
// }

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: [
//           {
//             title: 'Hello World',
//             published: true
//           },
//           {
//             title: 'This is my Second post',
//             content: 'this is still a draft'
//           }
//         ]
//       }
//     }
//   });
//   console.log(user);
// }

async function main() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });