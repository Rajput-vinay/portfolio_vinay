import React from 'react';
import { NAV_ITEMS } from '../data';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    background: 'rgba(5,10,15,0.9)', backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: "'Space Mono', monospace", color: 'var(--cyan)',
    fontSize: '1.1rem', letterSpacing: '2px', fontWeight: 700,
  },
  links: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap' },
};

export default function Navbar({ active, scrollTo }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>VR.dev</div>
      <div style={styles.links}>
        {NAV_ITEMS.map(id => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => { e.preventDefault(); scrollTo(id); }}
            style={{
              color: active === id ? 'var(--cyan)' : 'var(--muted)',
              textDecoration: 'none', fontSize: '0.72rem',
              letterSpacing: '2px', textTransform: 'uppercase',
              transition: 'color 0.3s', fontFamily: "'Space Mono', monospace",
            }}
          >
            {id}
          </a>
        ))}
      </div>
    </nav>
  );
}
