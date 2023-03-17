// Importer les modules nécessaires

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Charger les variables d'environnement du fichier .env

const ENV = dotenv.config().parsed
// Créer une nouvelle instance de Sequelize pour la connexion à la base de données

export const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT
});