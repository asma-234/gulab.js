const bcrypt = require('bcrypt');
const userService = require('../services/userService');

const loginForm = (req, res) => {
  res.render('login');
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.findByEmail(email);
  if (!user) return res.send('User not found');

  const match = bcrypt.compareSync(password, user.password);
  if (!match) return res.send('Wrong password');

  req.session.user = user;
  res.redirect('/');
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = { loginForm, login, logout };
