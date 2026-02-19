import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authenticate } from '../middleware/auth';

export const workspaceRoutes = Router();

workspaceRoutes.get('/', authenticate, async (req, res) => {
  const workspaces = await prisma.workspace.findMany({
    where: {
      members: { some: { userId: req.user!.id } },
    },
  });
  res.json(workspaces);
});
