import { Router } from 'express';
import { boardRoutes } from './board.routes';
import { taskRoutes } from './task.routes';
import { authRoutes } from './auth.routes';
import { workspaceRoutes } from './workspace.routes';

export const router = Router();

router.use('/auth', authRoutes);
router.use('/workspaces', workspaceRoutes);
router.use('/boards', boardRoutes);
router.use('/tasks', taskRoutes);

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', version: '2.4.1' });
});
