const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/:id', async function(req, res, next) {
  try {
    const userId = req.params.id;
    const user = await db.User.findOne({
      where: { uuid: userId },
      include: [
        { model: db.CreditCard, as: 'creditCard' },
        { model: db.Bank, as: 'bank' },
      ]
    });
    res.send(user); 
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

router.post('/:id/credit', async function(req, res, next) {
  try {
    const userId = req.params.id;
    await db.CreditCard.destroy({ where: { userId } })
    const data = await db.CreditCard.create({
      userId,
      ...req.body
    });
    res.send(data); 
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

router.post('/:id/bank', async function(req, res, next) {
  try {
    const userId = req.params.id;
    await db.Bank.destroy({ where: { userId } })
    const data = await db.Bank.create({
      userId,
      ...req.body
    });
    res.send(data); 
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

module.exports = router;
