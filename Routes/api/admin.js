const router = require("express").Router();
const auth = require("../../middleware/auth");

router.get("/", auth, (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Forbidden" });

  res.json({ message: "Admin dashboard" });
});

module.exports = router;
