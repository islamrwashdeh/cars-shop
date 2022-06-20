'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const carModel=require("./car");

const usersModel=require("./usersModel");
const Collection=require("./data-collection");

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequelizeOptions =
process.env.NODE_ENV === "production"
     ? {
         dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false}
         },
     }
     : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const car = carModel(sequelize, DataTypes);

const users = usersModel(sequelize,DataTypes);


module.exports = {
    sequelize:sequelize,
    DataTypes:DataTypes,
    food: new Collection(car),

    users: users,
}; 