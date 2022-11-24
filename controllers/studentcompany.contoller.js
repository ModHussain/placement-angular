const db = require("../models");
const studentcompany = db.studentcompany;
const Op = db.Sequelize.Op;

// Create and Save a new StudentCompany
exports.create = (req, res) => {
  // Validate request
  if (!req.body.companyName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a StudentCompany
  const data = {
    companyName: req.body.companyName,
    placedCount: req.body.placedCount
  };

  // Save StudentCompany in the database
  studentcompany.create(data)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the companyName."
      });
    });
};

// Retrieve all companyName from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  studentcompany.findAll({ where: condition })
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
