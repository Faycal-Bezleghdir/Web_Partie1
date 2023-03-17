import { validationResult } from 'express-validator';
import { Role } from '../models/index.js';

// Récupérer tous les rôles
export const getAll = async (req, res) => {
  try {
    const result = await Role.findAll();
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Supprimer un rôle
export const remove = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Role.destroy({ where: { id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Mettre à jour un rôle
export const update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Role.update(req.body, { where: {id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Créer un rôle
export const create = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Role.create(req.body);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Récupérer un rôle
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Role.findByPk(req.params.id);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
