const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const db = require("../models");

router.post('/', async function(req, res, next) {
  try {
    const data = await db.Transaction.create({
      transactionId: uuidv4(),
      ...req.body
    });
    res.send(data); 
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    const userId = req.params.id;
    const data = await db.Transaction.findAll({ where: { userId }});
    res.send(data);
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

module.exports = router;
