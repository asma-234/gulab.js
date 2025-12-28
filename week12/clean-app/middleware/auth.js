const isAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.session.user.role !== 'ADMIN') {
    return res.status(403).send('Access denied');
  }
  next();
};

const isOwnerOrAdmin = (req, res, next) => {
  const article = req.article;
  const user = req.session.user;

  if (user.role === 'ADMIN' || article.userId === user.id) {
    return next();
  }

  return res.status(403).send('Unauthorized');
};

module.exports = {
  isAuthenticated,
  isAdmin,
  isOwnerOrAdmin
};
