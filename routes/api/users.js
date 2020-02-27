const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require('passport');

router.get("/test", (req, res) => {
  res.json({msg: "This is the user route"})
});

router.get("/:id", (req, res) => {
  debugger
  User.findById(req.params.id).populate('spots').exec()
    .then(user => res.json(user.spots))
    .catch(err =>
      res.status(404).json({ nouserfound: "This user does not exist" })
    );
});

router.post("/register", (req, res) => {
  User.findOne({ username: req.body.username })
  .then(user => {
    if (user) {
      return res.status(400).json({username: "This user is already registered"})
    } else {
      const newUser = new User({
        username: req.body.username, 
        password: req.body.password
      })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json({ password: "some password issue" }))
        })
      }) 
    }
  })
})

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username})
    .then(user => {
      if (!user) {
        return res.status(404).json({ username: "This user does not exist" })
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            const payload = {
              id: user.id, 
              username: user.username
            }

            jwt.sign(
              payload, 
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true, 
                  token: "Bearer " + token
                });
              }
            )
            // res.json({msg: "Successfully logged in!"});
          } else {
            return res.status(400).json({password: "Incorrect username/password combination"})
          }
        })
    })
})

module.exports = router;