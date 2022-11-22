const db = require("../models");
const Feedback = db.feedback;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Feedback
  const feedback = {
    name: req.body.name,
    message: req.body.message,
    mobileNumber: req.body.mobileNumber
  };
//  published: req.body.published ? req.body.published : false
  // Save Feedback in the database
  Feedback.create(feedback)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Feedback."
      });
    });
};

// Retrieve all Feedback from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Feedback.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Feedback."
      });
    });
};
