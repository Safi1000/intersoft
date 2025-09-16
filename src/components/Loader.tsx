import React from 'react';
import { NewtonsCradle } from 'ldrs/react';
import 'ldrs/react/NewtonsCradle.css';

type LoaderProps = { isVisible?: boolean };

export default function LoaderOverlay({ isVisible = true }: LoaderProps): JSX.Element {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity .35s ease',
        pointerEvents: isVisible ? 'auto' as const : 'none' as const,
      }}
      aria-hidden={!isVisible}
    >
      <NewtonsCradle size="195" speed="1.4" color="#24c4c4" />
    </div>
  );
}

