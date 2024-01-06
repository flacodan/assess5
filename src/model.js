import Sequelize, { DataTypes, Model } from 'sequelize/types/sequelize.js';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return [this.fname, this.lname].join(' ');
  }
};

Human.init(
  {
    human_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  },
  {
    modelName: 'human',
    sequelize: db,
  }
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
};

Animal.init(
  {
    animal_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER,
    }
    //humanId FK from Human.human_id
  },
  {
    modelName: 'animal',
    sequelize: db,
  }
);

Human.hasMany(Animal, { foreignKey: 'human_id' });
Animal.belongsTo(Human, { foreignKey: 'human_id' });

export default db;
