import express from 'express';
const router = express.Router();
import CourseController from '../app/controllers/CourseController.js';

router.get('/:_id', CourseController.show);

export default router;