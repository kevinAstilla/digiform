import express from 'express';
import { getTemplates, getTemplate } from '@/controllers/templateController';

const router = express.Router();

router.get('/', getTemplates);
router.get('/:id', getTemplate);

export default router;