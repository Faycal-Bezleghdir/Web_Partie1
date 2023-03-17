import { Router } from 'express';
import * as comment from '../controllers/comment.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const commentRouter = Router();

commentRouter
// Récupérer tous les comment
    .get('/', passport.authenticate('jwt', { session: false }), comment.getAll)
    // Créer un nouveau comment avec les champs userId et text requis
    .post('/', body('userId').exists(), body('text').exists(), passport.authenticate('jwt', { session: false }), comment.create)
        // Récupérer un comment spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), comment.getOne)
    // Mettre à jour un comment spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), comment.update)
    // Supprimer un comment spécifique par son identifiant

    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), comment.remove)

export { commentRouter}