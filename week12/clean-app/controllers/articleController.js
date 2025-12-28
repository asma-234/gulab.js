const articleService = require('../services/articleService');

const list = async (req, res) => {
  const articles = await articleService.getAllArticles();
  res.render('index', {
    articles,
    user: req.session.user
  });
};

const createForm = (req, res) => {
  res.render('articleForm');
};

const create = async (req, res) => {
  await articleService.createArticle({
    title: req.body.title,
    content: req.body.content,
    userId: req.session.user.id
  });
  res.redirect('/');
};

const remove = async (req, res) => {
  await articleService.deleteArticle(req.article.id);
  res.redirect('/');
};

module.exports = {
  list,
  createForm,
  create,
  remove
};
