import { Role, User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

// // Récupérer tous les  Users
export const getAll = async (req, res) => {
  try {
    const result = await User.findAll({
      include: Role
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un User
export const remove = async (req, res) => {
  try {
    // Validation Express
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un User
export const update = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer un User
export const create = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const payload = req.body;
    const { role } = req.body;

    delete payload.role;

    payload.password = await bcrypt.hash(payload.password, 10);

    // Créer  user
    const result = await User.create(payload);
    // Créer un role
    const roles = await Role.create({ name: role });

    //Ajouter un rôle à  user
    await result.addRole(roles)
    res.status(200).json({ data: result });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un User
export const getOne = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = await User.findByPk(req.params.id);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const authenticate = async (req, res) => {
  try {
        // Validation Express

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
       // si user n'existe pas, génère une erreur
      throw new Error('User not found!');
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) {
       // si le mot de passe ou l'e-mail est incorrect, génère une erreur
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
