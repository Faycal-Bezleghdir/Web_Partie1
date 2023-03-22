// Importer les modules nécessaires

import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
// Définir le modèle Salary en utilisant sequelize.define

export const Salary = sequelize.define('Salary', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
})