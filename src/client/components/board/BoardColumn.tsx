import React from 'react';
import type { Column as ColumnType } from '../../../shared/types';

interface Props {
  column: ColumnType;
}

export const BoardColumn: React.FC<Props> = ({ column }) => {
  return (
    <div className="flex flex-col w-72 shrink-0">
      <div className="flex items-center gap-2 px-3 py-2 mb-3">
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: column.color }}
        />
        <h3 className="text-sm font-semibold text-kb-text uppercase tracking-wider">
          {column.name}
        </h3>
        <span className="text-xs text-kb-muted bg-kb-surface px-1.5 py-0.5 rounded">
          {column.tasks.length}
        </span>
        <button className="ml-auto text-kb-muted hover:text-kb-text">+</button>
      </div>
      <div className="flex flex-col gap-2 flex-1 min-h-[100px]">
        {column.tasks.length === 0 ? (
          <p className="text-kb-muted text-sm px-3">$ No tasks</p>
        ) : (
          column.tasks.map((task) => (
            <div
              key={task.id}
              className="bg-kb-surface border border-kb-border rounded-lg p-3 cursor-pointer hover:border-kb-accent/50 transition-colors"
            >
              <p className="text-sm text-kb-text">{task.title}</p>
            </div>
          ))
        )}
        <button className="text-kb-muted text-sm px-3 py-1 hover:text-kb-text">
          + Add task
        </button>
      </div>
    </div>
  );
};
