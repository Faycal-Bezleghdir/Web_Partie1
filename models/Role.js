
// Importer les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
// Définir le modèle Role en utilisant sequelize.define

export const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.ENUM('admin', 'secretary', 'technician'),
    allowNull: false
  },
})