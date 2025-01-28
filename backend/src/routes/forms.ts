import express from 'express';
import { getForms, getForm } from '@/controllers/formController';

const router = express.Router();
router.get('/', getForms);
router.get('/:id', getForm);

export default router;