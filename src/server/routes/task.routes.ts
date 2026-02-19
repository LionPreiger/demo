import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authenticate } from '../middleware/auth';
import { io } from '../index';

export const taskRoutes = Router();

taskRoutes.post('/', authenticate, async (req, res) => {
  const { title, description, columnId, priority, assigneeId } = req.body;
  
  const maxPosition = await prisma.task.aggregate({
    where: { columnId },
    _max: { position: true },
  });

  const task = await prisma.task.create({
    data: {
      title,
      description,
      columnId,
      priority,
      assigneeId,
      creatorId: req.user!.id,
      position: (maxPosition._max.position ?? -1) + 1,
    },
    include: { assignee: true, labels: true },
  });

  io.emit('task:created', task);
  res.status(201).json(task);
});

taskRoutes.patch('/:id/move', authenticate, async (req, res) => {
  const { columnId, position } = req.body;
  
  const task = await prisma.task.update({
    where: { id: req.params.id },
    data: { columnId, position },
    include: { assignee: true, labels: true },
  });

  io.emit('task:moved', task);
  res.json(task);
});
