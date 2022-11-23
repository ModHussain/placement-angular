module.exports = (sequelize, Sequelize) => {
    const Groupstudent = sequelize.define("groupstudent", {
      groupName: {
        type: Sequelize.STRING
      },
      placedCount: {
        type: Sequelize.STRING
      }
    });
    return Groupstudent;
  };