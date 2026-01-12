const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      email: "admin@test.com",
      password,
      role: "admin"
    }
  });

  await prisma.vacancy.create({
    data: { title: "Frontend Developer" }
  });
}

main();
