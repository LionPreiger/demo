import { Router } from 'express';

export const authRoutes = Router();

authRoutes.post('/login', async (_req, res) => {
  // TODO: Implement authentication
  res.json({ message: 'Not implemented' });
});

authRoutes.post('/register', async (_req, res) => {
  res.json({ message: 'Not implemented' });
});

authRoutes.get('/github/callback', async (_req, res) => {
  res.redirect('/');
});
