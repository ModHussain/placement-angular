module.exports = app => {
    const groupStudent = require("../controllers/groupstudent.contoller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", groupStudent.create);
  
    // Retrieve all company
    router.get("/", groupStudent.findAll);

    app.use('/api/groupstudent', router);
  };
  