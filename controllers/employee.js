import { validationResult } from 'express-validator';
import { Employee } from '../models/index.js';

// Récupérer tous les employés
export const getAll = async (req, res) => {
  try {
    const result = await Employee.findAll();
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Supprimer un employé
export const remove = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Employee.destroy({ where: { id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Mettre à jour un employé
export const update = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Employee.update(req.body, { where: {id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Créer un employé
export const create = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Employee.create(req.body);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Récupérer un employé
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Employee.findByPk(req.params.id);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
