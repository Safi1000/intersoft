import React from 'react';

export default function LoaderOverlay(): JSX.Element {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="newtons-cradle" aria-label="Loading" role="status">
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
      </div>
    </div>
  );
}

