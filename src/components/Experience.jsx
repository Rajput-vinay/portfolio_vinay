import React from 'react';
import { Section, SectionHeader, Card, TagRow } from './UI';
import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader num="04 / CAREER" title="Experience" />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="experience-row">
            {/* Date */}
            <div className="experience-year">
              {e.period}
            </div>

            {/* Dot + line */}
            <div className="experience-connector">
              <div style={{
                width: '12px', height: '12px', border: '2px solid var(--cyan)',
                borderRadius: '50%', background: 'var(--bg)', flexShrink: 0, position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', inset: '2px', borderRadius: '50%',
                  background: 'var(--cyan)', opacity: 0.4,
                }} />
              </div>
              {i < EXPERIENCE.length - 1 && (
                <div style={{ width: '1px', background: 'var(--border)', flex: 1, minHeight: '60px', marginTop: '4px' }} />
              )}
            </div>

            {/* Card */}
            <Card>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{e.role}</div>
              <div style={{
                color: 'var(--cyan)', fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '0.4rem',
              }}>
                {e.company}
              </div>
              <span style={{
                display: 'inline-block', padding: '0.15rem 0.6rem',
                background: 'var(--cyan3)', border: '1px solid var(--border)',
                color: 'var(--muted)', fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem', letterSpacing: '1px', marginBottom: '0.75rem',
              }}>
                {e.type}
              </span>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>

              <TagRow tags={e.stack} />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
