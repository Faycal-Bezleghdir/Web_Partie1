import { validationResult } from 'express-validator';
import { Inventory } from '../models/index.js';

// Récupérer tous les inventaires
export const getAll = async (req, res) => {
  try {
    const result = await Inventory.findAll();
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Supprimer un inventaire
export const remove = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Inventory.destroy({ where: { id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Mettre à jour un inventaire
export const update = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Inventory.update(req.body, { where: {id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Créer un inventaire
export const create = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Inventory.create(req.body);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// // Récupérer Inventory
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await Inventory.findByPk(req.params.id);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
