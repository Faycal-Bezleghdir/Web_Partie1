import { validationResult } from 'express-validator';
import { Article } from '../models/index.js';

// Récupérer tous les articles
export const getAll = async (req, res) => {
  try {
    const result = await Article.findAll();
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Supprimer un article
export const remove = async (req, res) => {
  try {
    // Validation Express
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Article.destroy({ where: { id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Mettre à jour un article
export const update = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Article.update(req.body, { where: {id: req.params.id }});
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Créer un article
export const create = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await Article.create(req.body);
    res.status(200).json({  data: result });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Récupérer un article
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Récupérer l'article par clé primaire
    const result = await Article.findByPk(req.params.id);
    res.status(200).json({  data: result });

  } catch (error) {
    // Gérer les erreurs et renvoyer le statut 500
    res.status(500).json({ message: error.message })
  }
};
