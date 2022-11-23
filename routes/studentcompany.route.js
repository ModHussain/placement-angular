module.exports = app => {
    const studentcompany = require("../controllers/studentcompany.contoller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", studentcompany.create);
  
    // Retrieve all company
    router.get("/", studentcompany.findAll);

    app.use('/api/studentcompany', router);
  };
  