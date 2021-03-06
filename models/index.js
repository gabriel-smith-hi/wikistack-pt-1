const Sequelize = require('sequelize');
//const { validator } = require('sequelize/types/lib/utils/validator-extras');

const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

const Page = db.define('page', {
  title: {
    type:  Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: Sequelize.ENUM('open', 'closed'),
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      unique: true,
      isEmail: true
    }
  },
});

module.exports = {
  db,
  Page,
  User,
};
