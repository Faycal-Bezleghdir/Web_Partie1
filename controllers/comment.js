import { validationResult } from 'express-validator';
import { Comment } from '../models/index.js';

// Récupérer tous les commentaires
export const getAll = async (req, res) => {
  try {
    const result = await Comment.findAll();
    res.status(200).json({  data: result });
// Gérer les erreurs et renvoyer le statut 500
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Supprimer un commentaire
export const remove = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Comment.destroy({ where: { id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Mettre à jour un commentaire
export const update = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Comment.update(req.body, { where: {id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Créer un commentaire
export const create = async (req, res) => {
  try {

        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Comment.create(req.body);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Récupérer un commentaire
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Comment.findByPk(req.params.id);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
