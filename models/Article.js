
// Importer les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

// Définir le modèle Article en utilisant sequelize.define
export const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})