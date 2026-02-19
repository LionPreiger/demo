export type TaskPriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type UserRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';

export interface User {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
}

export interface Workspace {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface Board {
  id: string;
  name: string;
  workspaceId: string;
  columns: Column[];
}

export interface Column {
  id: string;
  name: string;
  position: number;
  color: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string | null;
  priority: TaskPriority;
  columnId: string;
  position: number;
  assignee: User | null;
  labels: Label[];
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}
