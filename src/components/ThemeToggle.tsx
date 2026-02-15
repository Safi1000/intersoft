import { useEffect, useState } from 'react';

/**
 * Theme toggle button — switches between dark and light mode.
 * Uses the `html.dark` / `html.light` class strategy.
 * Persists preference to localStorage.
 */
export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    // On mount, read stored preference and apply
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = stored ? stored === 'dark' : true; // default dark
        setIsDark(prefersDark);
        applyTheme(prefersDark);
    }, []);

    function applyTheme(dark: boolean) {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
    }

    function toggle() {
        const next = !isDark;
        setIsDark(next);
        applyTheme(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    }

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="theme-toggle"
            style={{
                background: 'transparent',
                border: '1px solid',
                borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                width: '40px',
                height: '40px',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
            }}
        >
            {isDark ? (
                /* Sun icon — click to go light */
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ) : (
                /* Moon icon — click to go dark */
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3d3d3d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
