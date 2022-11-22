module.exports = app => {
    const feedback = require("../controllers/feedback.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", feedback.create);
  
    // Retrieve all company
    router.get("/", feedback.findAll);

    app.use('/api/feedback', router);
  };
  