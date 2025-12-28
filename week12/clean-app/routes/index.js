const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');
const articleService = require('../services/articleService');

const { isAuthenticated, isOwnerOrAdmin } = require('../middleware/auth');

router.get('/', articleController.list);

router.get('/login', authController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/articles/new', isAuthenticated, articleController.createForm);
router.post('/articles', isAuthenticated, articleController.create);

router.post('/articles/delete/:id',
  isAuthenticated,
  async (req, res, next) => {
    req.article = await articleService.getArticleById(Number(req.params.id));
    next();
  },
  isOwnerOrAdmin,
  articleController.remove
);

module.exports = router;
