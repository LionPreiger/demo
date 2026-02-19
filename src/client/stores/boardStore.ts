import { create } from 'zustand';
import type { Board, Task } from '../../shared/types';

interface BoardState {
  boards: Board[];
  activeBoard: Board | null;
  isLoading: boolean;
  setBoards: (boards: Board[]) => void;
  setActiveBoard: (board: Board) => void;
  moveTask: (taskId: string, toColumnId: string, position: number) => void;
  addTask: (task: Task) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  boards: [],
  activeBoard: null,
  isLoading: false,

  setBoards: (boards) => set({ boards }),
  
  setActiveBoard: (board) => set({ activeBoard: board }),

  moveTask: (taskId, toColumnId, position) => {
    const board = get().activeBoard;
    if (!board) return;
    // TODO: Implement optimistic update
  },

  addTask: (task) => {
    const board = get().activeBoard;
    if (!board) return;
    // TODO: Add task to column
  },
}));
