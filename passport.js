
// Importer les modules nécessaires
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { User } from './models/index.js';

// Extraire les composants nécessaires à partir de passportJWT

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// Créer une nouvelle stratégie JWT

const strategy = new JWTStrategy({
    // Extraire le token JWT de l'en-tête d'autorisation en tant que Bearer Token

  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    // Utiliser la clé secrète définie dans les variables d'environnement pour vérifier le token

  secretOrKey: process.env.JWT_SECRET
}, (jwtPayload, next) => {
    // Trouver l'utilisateur associé à l'ID contenu dans le token JWT

return User.findOne({ where: { email: jwtPayload.id }}).then(user => {
      // Si l'utilisateur existe, passer l'utilisateur au middleware suivant

  if (user) {
    return next(null, user)
  }
      // Sinon, passer un objet false pour indiquer que l'utilisateur n'est pas authentifié

  return next(null, false)
})
})
// Utiliser la stratégie JWT avec Passport

passport.use(strategy)
