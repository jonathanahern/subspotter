const express = require("express");
const router = express.Router();
const Spot = require("../../models/Spot");
const mongoose = require('mongoose');
const passport = require('passport');
const validateSpotInput = require('../../validation/spots')

router.get("/test", (req, res) => {
  debugger
  res.json({ msg: "This is the spots route" })
});

router.get("/", (req, res) => {
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.status(404).json({ nospotsfound: "No spots found" }));
});

router.get("/:id", (req, res) => {
  Spot.findById(req.params.id)
    .then(spot => res.json(spot))
    .catch(err =>
      res.status(404).json({ nospotfound: "This spot does not exist" })
    );
});

router.post("/", 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSpotInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // const stop_id = Stop.findById(req.body.stop_id)
// debugger
    const newSpot = new Spot({
      title: req.body.title,
      body: req.body.body,
      user_id: req.user.id,
      stop_id: req.body.stop_id
    });
debugger
    newSpot.save().then(spot => res.json(spot));
    User.findOneAndUpdate(
      { _id: req.user.id },
      { $push: { spots: newSpot } },
      { new: true },
      function (errors, data) {
        debugger
        return res.status(400).json(errors);
      }
    );
  }
)

module.exports = router;