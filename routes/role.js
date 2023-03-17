import { Router } from 'express';
import * as role from '../controllers/role.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const roleRouter = Router();

roleRouter
    // Récupérer tous les rôles
    .get('/', passport.authenticate('jwt', { session: false }), role.getAll)
        // Créer un nouveau rôle avec le champ name requis
    .post('/', body('name').exists(), passport.authenticate('jwt', { session: false }), role.create)
        // Récupérer un rôle spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), role.getOne)
        // Mettre à jour un rôle spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), role.update)
        // Supprimer un rôle spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), role.remove)

export { roleRouter }