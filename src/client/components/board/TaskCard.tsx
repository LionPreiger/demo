import React from 'react';
import type { Task } from '../../../shared/types';

interface Props {
  task: Task;
  onClick?: () => void;
}

export const TaskCard: React.FC<Props> = ({ task, onClick }) => {
  const priorityColors: Record<string, string> = {
    CRITICAL: 'bg-red-500/20 text-red-400',
    HIGH: 'bg-orange-500/20 text-orange-400',
    MEDIUM: 'bg-yellow-500/20 text-yellow-400',
    LOW: 'bg-green-500/20 text-green-400',
  };

  return (
    <div
      onClick={onClick}
      className="bg-kb-surface border border-kb-border rounded-lg p-3 cursor-pointer hover:border-kb-accent/50 transition-all group"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-kb-muted font-mono">#{task.id.slice(0, 6)}</span>
        {task.labels.map((label) => (
          <span
            key={label.id}
            className="text-[10px] px-1.5 py-0.5 rounded"
            style={{ backgroundColor: label.color + '33', color: label.color }}
          >
            {label.name}
          </span>
        ))}
      </div>
      <p className="text-sm text-kb-text mb-2">{task.title}</p>
      <div className="flex items-center justify-between">
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        {task.assignee && (
          <img
            src={task.assignee.avatarUrl || ''}
            alt={task.assignee.name || ''}
            className="w-5 h-5 rounded-full"
          />
        )}
      </div>
    </div>
  );
};
