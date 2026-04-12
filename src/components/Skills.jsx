import React from 'react';
import { Section, SectionHeader, Card, TagRow } from './UI';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader num="02 / TECHNICAL" title="Skills" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {SKILLS.map((s, i) => (
          <Card key={i}>
            <div style={{
              fontFamily: "'Space Mono', monospace", color: 'var(--cyan)',
              fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              {s.cat}
            </div>
            <TagRow tags={s.tags} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
