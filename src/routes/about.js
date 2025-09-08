import express from 'express';
const router = express.Router();
import AboutController from '../app/controllers/AboutController.js';

router.use('/:slug', AboutController.show);
router.use('/', AboutController.index);

export default router;
