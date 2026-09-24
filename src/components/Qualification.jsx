import React from 'react';
import { Section, SectionHeader, Card } from './UI';
import { QUALIFICATIONS } from '../data';

export default function Qualification() {
  return (
    <Section id="qualification">
      <SectionHeader num="01 / EDUCATION" title="Qualification" />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {QUALIFICATIONS.map((q, i) => (
          <div key={i} className="qualification-row">
            {/* Year */}
            <div className="qualification-year">
              {q.year}
            </div>

            {/* Dot + line */}
            <div className="qualification-connector">
              <div style={{
                width: '10px', height: '10px',
                border: '2px solid var(--cyan)', borderRadius: '50%',
                background: 'var(--bg)', flexShrink: 0,
              }} />
              {i < QUALIFICATIONS.length - 1 && (
                <div style={{ width: '1px', background: 'var(--border)', minHeight: '60px', marginTop: '4px', flex: 1 }} />
              )}
            </div>

            {/* Card */}
            <Card>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{q.degree}</div>
              <div style={{ color: 'var(--muted)', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem' }}>{q.school}</div>
              <span style={{
                display: 'inline-block', marginTop: '0.5rem', padding: '0.2rem 0.75rem',
                background: 'var(--cyan3)', border: '1px solid var(--border2)',
                color: 'var(--cyan)', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '1px',
              }}>
                {q.pct}
              </span>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
