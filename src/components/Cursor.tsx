import { useEffect, useState } from 'react';

/**
 * Custom circle cursor tracking the mouse position.
 * Features:
 * - Smooth trailing effect
 * - Expands on hover over interactive elements
 * - Hides on touch devices
 * - Colors adapt to theme via CSS
 */
export default function Cursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isMobile) return;

        // Apply cursor: none to body only on desktop
        document.body.style.cursor = 'none';

        const moveCursor = (e: MouseEvent) => {
            // Use requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable') ||
                target.getAttribute('role') === 'button'
            ) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Don't render on touch devices (server-side/hydration safe check)
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <style>{`
        /* Default Dark Mode Cursor Styles */
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          mix-blend-mode: difference;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cursor-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.4);
          animation: cursorSpin 4s linear infinite;
          transition: border-color 0.3s ease;
        }

        @keyframes cursorSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background-color: #24c4c4; /* Teal dot */
          border-radius: 50%;
          transition: width 0.2s ease, height 0.2s ease, background-color 0.3s ease;
        }

        /* Hover interaction state */
        .custom-cursor.hovering {
          width: 54px;
          height: 54px;
          background-color: rgba(36, 196, 196, 0.05);
        }

        .custom-cursor.hovering .cursor-ring {
          border-color: rgba(36, 196, 196, 0.5); /* Teal glow ring */
        }
        
        /* Click state */
        .custom-cursor.clicking {
          transform: translate(-50%, -50%) scale(0.85);
        }

        /* Light Mode Overrides */
        .light .custom-cursor {
          mix-blend-mode: normal;
        }

        .light .cursor-ring {
          border-color: rgba(0, 0, 0, 0.3);
        }

        .light .custom-cursor-dot {
          background-color: #d2b48c; /* Brown dot */
        }

        .light .custom-cursor.hovering {
          background-color: rgba(210, 180, 140, 0.1);
        }

        .light .custom-cursor.hovering .cursor-ring {
          border-color: rgba(210, 180, 140, 0.6); /* Brown ring */
        }
      `}</style>

            {/* Outer Ring Wrapper */}
            <div
                className={`custom-cursor ${hovering ? 'hovering' : ''} ${clicked ? 'clicking' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >
                <div className="cursor-ring" />
            </div>

            {/* Inner Dot */}
            <div
                className="custom-cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}
