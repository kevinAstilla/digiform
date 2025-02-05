import express from 'express';
import { getTemplates, getTemplate, deleteTemplate } from '@/controllers/templateController';

const router = express.Router();

router.get('/', getTemplates);
router.get('/:id', getTemplate);
router.delete('/:id', deleteTemplate);

export default router;