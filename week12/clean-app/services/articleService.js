const prisma = require('../prisma/client');

const getAllArticles = async () => {
  return prisma.article.findMany({
    include: { user: true }
  });
};

const getArticleById = async (id) => {
  return prisma.article.findUnique({ where: { id } });
};

const createArticle = async (data) => {
  return prisma.article.create({ data });
};

const deleteArticle = async (id) => {
  return prisma.article.delete({ where: { id } });
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  deleteArticle
};
