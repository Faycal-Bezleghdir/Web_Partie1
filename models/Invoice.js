
// Importer les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
// Définir le modèle Invoice en utilisant sequelize.define

export const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item: {
    type: DataTypes.STRING,
    allowNull: false
  }
})