const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.list = async (req, res) => {
  const vacancies = await prisma.vacancy.findMany();
  res.json(vacancies);
};
