const db = require("../models");
const groupStudent = db.groupstudent;
const Op = db.Sequelize.Op;

// Create and Save a new GroupStudent
exports.create = (req, res) => {
  // Validate request
  if (!req.body.companyName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a GroupStudent
  const data = {
    groupName: req.body.groupName,
    placedCount: req.body.message
  };

  // Save GroupStudent in the database
  groupStudent.create(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the GroupStudent."
      });
    });
};

// Retrieve all GroupStudent from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  groupStudent.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving GroupStudent."
      });
    });
};
