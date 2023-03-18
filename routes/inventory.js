import { Router } from 'express';
import * as inventory from '../controllers/inventory.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const inventoryRouter = Router();

inventoryRouter
        // Récupérer tous les éléments de l'inventory
    .get('/', passport.authenticate('jwt', { session: false }), inventory.getAll)
            // Créer un nouvel élément d'inventory avec les champs quantity et name requis
    .post('/', body('quantity').exists(), body('name').exists(), passport.authenticate('jwt', { session: false }), inventory.create)
            // Récupérer un élément d'inventory spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), inventory.getOne)
            // Mettre à jour un élément d'inventory spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), inventory.update)
            // Supprimer un élément d'inventaire spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), inventory.remove)


export { inventoryRouter}