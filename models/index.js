const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company= require("./company.js")(sequelize, Sequelize);
db.student= require("./student.js")(sequelize, Sequelize);
db.feedback= require("./feedback.js")(sequelize, Sequelize);
db.studentcompany = require("./studentcompany.js")(sequelize, Sequelize);
db.groupstudent = require("./groupstudent.js")(sequelize, Sequelize);

module.exports = db;