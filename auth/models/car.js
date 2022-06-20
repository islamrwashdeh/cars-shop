'use strict';

const carModel = (sequelize, DataTypes) => sequelize.define('car', {
  name: { type: DataTypes.STRING, required: true },
  calories: { type: DataTypes.FLOAT, required: true },
  type: { type: DataTypes.ENUM('model', 'colour', 'type'), required: true }
},{ 
    sequelize,
    tableName: 'car',
    timestamps: false,
    });

module.exports = carModel;