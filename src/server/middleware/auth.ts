import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../shared/env';

export const authenticate = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return next(); // TODO: return 401
  
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as { userId: string };
    (req as any).user = { id: payload.userId };
    next();
  } catch {
    next();
  }
};
