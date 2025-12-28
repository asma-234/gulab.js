module.exports.validateSearchQuery = (req, res, next) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Query parameter is required",
    });
  }

  if (query.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Query must be at least 2 characters long",
    });
  }

  next();
};
