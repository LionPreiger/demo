import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authenticate } from '../middleware/auth';

export const boardRoutes = Router();

boardRoutes.get('/:workspaceId', authenticate, async (req, res) => {
  const boards = await prisma.board.findMany({
    where: { workspaceId: req.params.workspaceId },
    include: {
      columns: {
        orderBy: { position: 'asc' },
        include: {
          tasks: {
            orderBy: { position: 'asc' },
            include: { assignee: true, labels: true },
          },
        },
      },
    },
  });
  res.json(boards);
});

boardRoutes.post('/', authenticate, async (req, res) => {
  const { name, workspaceId } = req.body;
  const board = await prisma.board.create({
    data: { name, workspaceId },
  });
  res.status(201).json(board);
});
