import { Router } from 'express';
import * as article from '../controllers/article.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const articleRouter = Router();

articleRouter
    // Récupérer tous les articles
    .get('/', passport.authenticate('jwt', { session: false }), article.getAll)
        // Créer un nouvel article avec les champs userId, title et text requis
    .post('/', body('userId').exists(), body('title').exists(), body('text').exists(), passport.authenticate('jwt', { session: false }), article.create)
        // Récupérer un article spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), article.getOne)
    // Mettre à jour un article spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), article.update)
        // Supprimer un article spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), article.remove)

export { articleRouter}