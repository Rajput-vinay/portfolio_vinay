import React from 'react';

const LINKS = [
  { label: 'vinaryrajput2004vr@gmail.com', href: 'mailto:vinaryrajput2004vr@gmail.com' },
  { label: 'github/Rajput-vinay',          href: 'https://github.com/Rajput-vinay' },
  { label: 'linkedin/vinay-rajput',        href: 'https://linkedin.com/in/vinay-rajput-984668227' },
];

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      textAlign: 'center', padding: '2rem',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        {LINKS.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : '_self'}
            rel="noreferrer"
            style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '1px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
        color: 'var(--muted)', letterSpacing: '2px',
      }}>
        VINAY RAJPUT © 2025 · SOFTWARE DEVELOPER · AGRA, INDIA
      </div>
    </footer>
  );
}
