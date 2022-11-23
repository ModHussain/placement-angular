module.exports = (sequelize, Sequelize) => {
    const studentCompany = sequelize.define("studentcompany", {
      companyName: {
        type: Sequelize.STRING
      },
      placedCount: {
        type: Sequelize.STRING
      }
    });
  
    return studentCompany;
  };
