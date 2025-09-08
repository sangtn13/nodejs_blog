import express from 'express';
const router = express.Router();
import ContactController from '../app/controllers/ContactController.js';

router.get('/:slug', ContactController.show);
router.get('/', ContactController.index);

export default router;
