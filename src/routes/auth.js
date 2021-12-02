const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const db = require("../models");
const { generateJWTToken } = require('../services/jwt')

router.post('/signin', async function(req, res, next) {
  try {
    const {userID, password} = req.body;
    const user = await db.User.findOne({ where: { userID } });
    if (user) {if (bcrypt.compareSync(password, user.password)) {
        const token = generateJWTToken({ userID }, "2h");
        res.send({token, user});
      } else {
        res.status(401).json({error: 'Wrong password'})
      }
    } else {
      res.status(401).json({error: 'User is not existed'})
    }
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

router.post('/signup', async function(req, res, next) {
  try {
    const params = req.body
    const users = await db.User.findAll({ where: { userID: params.userID } });
    if (users.length === 0) {
      const passwordHash = bcrypt.hashSync(params.password, 10);
      const data = await db.User.create({
        uuid: uuidv4(),
        ...params,
        password: passwordHash,
      });
      res.send(data); 
    } else {
      res.status(500).json({error: `User already exists with userID "${params.userID}"`})
    }
  } catch (e) {
    res.status(e.status >= 100 && e.status < 600 ? e.code : 500).json({
      error: e.message
    });
  }
});

module.exports = router;
