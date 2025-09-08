import express from 'express';
const router = express.Router();
import AboutController from '../app/controllers/AboutController.js';

router.get('/:slug', AboutController.show);
router.get('/', AboutController.index);

export default router;
