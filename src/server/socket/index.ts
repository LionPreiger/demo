import { Server } from 'socket.io';

export function setupSocketHandlers(io: Server) {
  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('board:join', (boardId: string) => {
      socket.join(`board:${boardId}`);
    });

    socket.on('board:leave', (boardId: string) => {
      socket.leave(`board:${boardId}`);
    });

    socket.on('cursor:move', (data) => {
      socket.broadcast.emit('cursor:update', {
        userId: data.userId,
        position: data.position,
      });
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}
