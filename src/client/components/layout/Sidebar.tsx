import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 bg-kb-surface border-r border-kb-border h-screen flex flex-col">
      <div className="p-4 border-b border-kb-border">
        <h1 className="text-lg font-bold text-kb-text flex items-center gap-2">
          <span className="border border-kb-border px-2 py-0.5 rounded text-sm">Kode Board</span>
        </h1>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-kb-text bg-kb-bg rounded">
          📋 Board
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-kb-muted hover:text-kb-text rounded">
          📊 Analytics
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-kb-muted hover:text-kb-text rounded">
          ⚙️ Settings
        </a>
      </nav>
    </aside>
  );
};
