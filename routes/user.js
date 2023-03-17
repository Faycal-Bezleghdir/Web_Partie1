import { Router } from 'express';
import * as user from '../controllers/user.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const userRouter = Router();

userRouter
    // Récupérer tous les user
    .get('/', passport.authenticate('jwt', { session: false }), user.getAll)
        // Créer un nouvel user avec les champs email, password, name, role, firstName et birth requis
    .post('/', body('email').isEmail(), body('password').exists(), body('name').exists(), body('role').exists(), body('firstName').exists(), body('birth').exists(), user.create)
        // Authentifier un user avec les champs email et password requis
    .post('/auth', body('email').isEmail(), body('password').exists(), user.authenticate)
        // Récupérer un user spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), user.getOne)
        // Mettre à jour un user spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), user.update)
        // Supprimer un user spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), user.remove)

export { userRouter }