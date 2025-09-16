import { memo } from 'react';

type SectionDividerProps = {
  direction?: 'up' | 'down';
  className?: string;
};

// Simple animated gradient wave divider
function SectionDivider({ direction = 'up', className }: SectionDividerProps) {
  const isUp = direction === 'up';
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-[80px] md:h-[120px] ${isUp ? '' : 'rotate-180'}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#24c4c4" />
            <stop offset="100%" stopColor="#bc3723" />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C240,96 480,16 720,40 C960,64 1200,112 1440,80 L1440,120 L0,120 Z"
          fill="url(#dividerGradient)"
          fillOpacity="0.12"
        >
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
            M0,64 C240,96 480,16 720,40 C960,64 1200,112 1440,80 L1440,120 L0,120 Z;
            M0,60 C240,80 480,24 720,36 C960,48 1200,116 1440,84 L1440,120 L0,120 Z;
            M0,64 C240,96 480,16 720,40 C960,64 1200,112 1440,80 L1440,120 L0,120 Z
          " />
        </path>
      </svg>
    </div>
  );
}

export default memo(SectionDivider);

