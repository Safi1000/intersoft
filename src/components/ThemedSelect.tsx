import React, { useEffect, useRef, useState } from 'react';

export type SelectOption = { value: string; label: string };

type ThemedSelectProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
};

export default function ThemedSelect({ id, value, onChange, options, placeholder = 'Select...', className = '' }: ThemedSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleSelect = (newValue: string) => {
    if (newValue !== value) onChange(newValue);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`themed-select ${open ? 'is-open' : ''} ${className}`}>
      <button
        id={id}
        type="button"
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className={`select-label ${selected ? '' : 'placeholder'}`}>{selected ? selected.label : placeholder}</span>
        <svg className="select-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="chevGrad" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#24c4c4" />
              <stop offset="100%" stopColor="#bc3723" />
            </linearGradient>
          </defs>
          <path d="M6 9l6 6 6-6" stroke="url(#chevGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <ul className="select-menu" role="listbox" aria-labelledby={id}>
          {options.map((opt) => (
            <li key={opt.value} role="option" aria-selected={opt.value === value}>
              <button type="button" className="menu-item" onClick={() => handleSelect(opt.value)}>
                <span className="menu-item-label">{opt.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


