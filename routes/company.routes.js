module.exports = app => {
  const company = require("../controllers/company.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", company.create);

  // Retrieve all company
  router.get("/", company.findAll);

  // Retrieve all published company
  router.get("/selected", company.findAllSelected);

  // Retrieve a single Tutorial with id
  router.get("/:id", company.findOne);

  // Update a Tutorial with id
  router.put("/:id", company.update);

  // Delete a Tutorial with id
  router.delete("/:id", company.delete);

  // Delete all company
  router.delete("/", company.deleteAll);

  app.use('/api/company', router);
};
