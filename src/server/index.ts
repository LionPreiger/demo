import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { router as apiRouter } from './routes';
import { setupSocketHandlers } from './socket';
import { env } from '../shared/env';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: env.CLIENT_URL, credentials: true },
});

app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use('/api', apiRouter);

setupSocketHandlers(io);

httpServer.listen(env.PORT, () => {
  console.log(`🚀 Kodeboard server running on port ${env.PORT}`);
});

export { io };
