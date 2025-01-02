import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/[0.1] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
    </div>
  );
};

export default BackgroundGrid;
