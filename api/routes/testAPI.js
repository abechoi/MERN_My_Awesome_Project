const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("Connected to API...");
});

module.exports = router;