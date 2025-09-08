import express from 'express';
const router = express.Router();
import CourseController from '../app/controllers/CourseController.js';

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.delete('/:id', CourseController.delete);
router.patch('/:id/restore', CourseController.restore);
router.delete('/:id/force', CourseController.forceDelete);
router.post('/bulk-action', CourseController.bulkAction);
router.get('/:_id', CourseController.show);

export default router;