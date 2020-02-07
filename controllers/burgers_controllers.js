var express = require("express");
var router = express.Router();

var db = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.burger.findAll({ raw: true })
    .then(function (data) {
      console.log(data)
      res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function (result) {
    res.json(result);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.params.id)
  db.burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
});

module.exports = router;
