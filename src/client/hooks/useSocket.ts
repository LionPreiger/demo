import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export function useSocket(boardId: string | null) {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!boardId) return;

    const socket = io('/', { transports: ['websocket'] });
    socketRef.current = socket;

    socket.on('connect', () => {
      socket.emit('board:join', boardId);
    });

    return () => {
      socket.emit('board:leave', boardId);
      socket.disconnect();
    };
  }, [boardId]);

  return socketRef.current;
}
