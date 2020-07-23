const express = require('express');
const router = express.Router();

const items = {
  "items": [
    { "id": 1, "name": "Apples", "price": 2.10 },
    { "id": 2, "name": "Peaches", "price": 5.50 }
  ]
}

router.get('/', (req, res, next) => {
  res.json(items);
});

module.exports = router;