
// Importer les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Définir le modèle Comment en utilisant sequelize.define
export const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
})