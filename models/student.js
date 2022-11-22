module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      companyName:{
        type: Sequelize.STRING
      },
      studentName: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.STRING
      },
      mobileNumber: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      emailId: {
        type: Sequelize.STRING
      },
      tenthMarks:{
        type: Sequelize.STRING
      },
      boardMarks:{
        type: Sequelize.STRING
      },
      interviewStatus: {
        type: Sequelize.STRING
      }
    });
  
    return Student;
  };