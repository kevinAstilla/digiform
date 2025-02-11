import express from 'express';
import { getForms, getForm, deleteForm, submitForm, getSubmissions } from '@/controllers/formController';

const router = express.Router();
router.get('/', getForms);
router.get('/:id', getForm);
router.get('/:id/submissions', getSubmissions);
router.post('/:id/submit', submitForm)
router.delete('/:id', deleteForm);

export default router;