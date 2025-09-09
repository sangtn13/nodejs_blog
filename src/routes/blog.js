import express from 'express';
const router = express.Router();
import BlogController from '../app/controllers/BlogController.js';

router.get('/', BlogController.index);

export default router;
