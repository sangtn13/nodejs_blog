import express from 'express';
const router = express.Router();
import MeController from '../app/controllers/MeController.js';

router.get('/trash/courses', MeController.trashCourses);
router.get('/stored/courses', MeController.storedCourses);

export default router;