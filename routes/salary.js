import { Router } from 'express';
import * as salary from '../controllers/salary.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const salaryRouter = Router();

salaryRouter
    // Récupérer tous les salary
    .get('/', passport.authenticate('jwt', { session: false }), salary.getAll)
        // Créer un nouveau salary avec les champs userId et amount requis
    .post('/', body('userId').exists(), body('amount').exists(), passport.authenticate('jwt', { session: false }), salary.create)
        // Récupérer un salary spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), salary.getOne)
        // Mettre à jour un salary spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), salary.update)
        // Supprimer un salary spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), salary.remove)

export { salaryRouter}