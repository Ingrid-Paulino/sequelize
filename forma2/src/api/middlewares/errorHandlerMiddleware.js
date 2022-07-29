const errorHandlerMiddleware = (err, _req, res, _next) => {
  if (err) return res.status(err.status).json({ error: err.message });
  return res.status(500).json({ error: { message: err.message } });
};

module.exports = errorHandlerMiddleware;