//Importer les modules et bibliothèques nécessaires
import express from 'express'
import cors from 'cors';
import { sequelize } from './connection.js';
import { articleRouter } from './routes/article.js';
import { commentRouter } from './routes/comment.js';
import { employeeRouter } from './routes/employee.js';
import { inventoryRouter } from './routes/inventory.js';
import { invoiceRouter } from './routes/invoice.js';
import { roleRouter } from './routes/role.js';
import { salaryRouter } from './routes/salary.js';
import { userRouter } from './routes/user.js';
import passport from 'passport';

// Importer les modèles
import './models/index.js';
// Initialiser la stratégie de Passport
import './passport.js';
// Synchroniser les modèles avec la base de données
sequelize.sync({ force: false})
// Définir le numéro de port
const PORT = process.env.PORT
// Créer une nouvelle instance de l'application Express
const app = express()

// Activer CORS
app.use(cors());

// Middleware pour l'analyse des données JSON
app.use(express.json())

// Middleware pour l'analyse des données de formulaire
app.use(express.urlencoded({ extended: false }));

// Initialiser Passport avec Express
app.use(passport.initialize());

// Configurer les routeurs
app.use('/article', articleRouter)
app.use('/comment', commentRouter)
app.use('/employee', employeeRouter)
app.use('/inventory', inventoryRouter)
app.use('/invoice', invoiceRouter)
app.use('/role', roleRouter)
app.use('/salary', salaryRouter)
app.use('/user', userRouter)

// Lancer le serveur sur le port défini

app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))





