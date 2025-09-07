import express from 'express';
const router = express.Router();
import ContactController from '../app/controllers/ContactController.js';

router.use('/:slug', ContactController.show);
router.use('/', ContactController.index);

export default router;