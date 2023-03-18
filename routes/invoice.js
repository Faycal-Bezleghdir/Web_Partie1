import { Router } from 'express';
import * as invoice from '../controllers/invoice.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const invoiceRouter = Router();

invoiceRouter
// Récupérer toutes les invoice
    .get('/', passport.authenticate('jwt', { session: false }), invoice.getAll)
        // Créer une nouvelle invoice avec les champs userId, item, quantity et total requis
    .post('/', body('userId').exists(), body('item').exists(), body('quantity').exists(), body('total').exists(), passport.authenticate('jwt', { session: false }), invoice.create)
        // Récupérer une invoice spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), invoice.getOne)
        // Mettre à jour une invoice spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), invoice.update)
        // Supprimer une invoice spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), invoice.remove)

export { invoiceRouter}