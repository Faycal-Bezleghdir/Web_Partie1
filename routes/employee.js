import { Router } from 'express';
import * as employee from '../controllers/employee.js'
import passport from 'passport';
import { body, param } from 'express-validator';

const employeeRouter = Router();

employeeRouter
    // Récupérer tous les employés
    .get('/', passport.authenticate('jwt', { session: false }), employee.getAll)
        // Créer un nouvel employé avec les champs firstName et lastName requis
    .post('/', body('firstName').exists(), body('lastName').exists(), passport.authenticate('jwt', { session: false }), employee.create)
        // Récupérer un employé spécifique par son identifiant
    .get('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), employee.getOne)
        // Mettre à jour un employé spécifique par son identifiant
    .put('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), employee.update)
        // Supprimer un employé spécifique par son identifiant
    .delete('/:id', [param('id').exists()], passport.authenticate('jwt', { session: false }), employee.remove)

export { employeeRouter}