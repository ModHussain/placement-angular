module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      info:{
        type : Sequelize.STRING
      }
    });
  
    return Company;
  };