
// Importer les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
// Définir le modèle Inventory en utilisant sequelize.define

export const Inventory = sequelize.define('Inventory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})