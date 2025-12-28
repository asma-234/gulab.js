const prisma = require('../prisma/client');

const createUser = async (data) => {
  return prisma.user.create({ data });
};

const findByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

module.exports = { createUser, findByEmail };
