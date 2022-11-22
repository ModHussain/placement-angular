module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
      name: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      mobileNumber:{
        type : Sequelize.STRING
      }
    });
  
    return Feedback;
  };