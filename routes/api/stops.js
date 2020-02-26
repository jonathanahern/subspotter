const express = require("express");
const router = express.Router();
const Stop = require("../../models/Stop");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the stops route" })
});

router.get("/", (req, res) => {
  Stop.find()
    .then(stops => res.json(stops))
    .catch(err => res.status(404).json({ nostopsfound: "No stops found" }));
});

router.get("/:id", (req, res) => {
  Stop.findById(req.params.id)
    .then(stop => res.json(stop))
    .catch(err =>
      res.status(404).json({ nostopfound: "No stop found with that ID" })
    );
});

module.exports = router;