import React from 'react';
import { Section, SectionHeader, Card } from './UI';
import { ACTIVITIES } from '../data';

export default function Activities() {
  return (
    <Section id="activities">
      <SectionHeader num="05 / BEYOND CODE" title="Activities" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {ACTIVITIES.map((a, i) => (
          <Card key={i}>
            <div style={{
              width: '44px', height: '44px',
              border: '1px solid var(--border2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem', color: 'var(--cyan)',
              fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '1px',
            }}>
              {a.icon}
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{a.role}</div>
            <div style={{
              color: 'var(--cyan)', fontFamily: "'Space Mono', monospace",
              fontSize: '0.78rem', letterSpacing: '1px', marginBottom: '0.75rem',
            }}>
              {a.org}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{a.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
