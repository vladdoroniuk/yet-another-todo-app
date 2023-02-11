import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "John",
      email: "john@gmail.com",
      password: "12345",
      todos: {
        create: [
          {
            id: 1,
            title: "John's first todo",
          },
        ],
      },
    },
  });

  /*   await prisma.todo.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 1,
      title: "John's second todo",
    },
  }); */

  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Mike",
      email: "mile@gmail.com",
      password: "54321",
      todos: {
        create: [
          {
            id: 3,
            title: "Mike's first todo",
          },
        ],
      },
    },
  });
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
