
// Importer les modules nécessaires
import { sequelize } from '../connection.js';
import { Article } from './Article.js';
import { Comment } from './Comment.js';
import { Employee } from './Employee.js';
import { Inventory } from './Inventory.js';
import { Invoice } from './Invoice.js';
import { Role } from './Role.js';
import { Salary } from './Salary.js';
import { User } from './User.js';

// Définir la table de liaison UserRole pour les relations many-to-many entre les utilisateurs et les rôles

const UserRole = sequelize.define('user_role', {});

// Associer les utilisateurs et les rôles en utilisant la table de liaison UserRole
User.belongsToMany(Role, {
  through: UserRole
});

Role.belongsToMany(User, {
  through: UserRole
});
// Associer les utilisateurs et les commentaires (un utilisateur peut avoir plusieurs commentaires)

User.hasMany(Comment);
Comment.belongsTo(User);
// Associer les utilisateurs et les articles (un utilisateur peut avoir plusieurs articles)

User.hasMany(Article);
Article.belongsTo(User);
// Associer les utilisateurs et les factures (un utilisateur peut avoir plusieurs factures)

User.hasMany(Invoice);
Invoice.belongsTo(User);
// Associer les utilisateurs et les salaires (un utilisateur peut avoir un salaire)

User.hasOne(Salary);
Salary.belongsTo(User);
// Exporter les modèles

export { Role, User, Employee, Inventory, Comment, Article, Invoice, Salary }