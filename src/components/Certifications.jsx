import React from 'react';
import { Section, SectionHeader, Card } from './UI';
import { CERTIFICATIONS } from '../data';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader num="07 / CERTIFICATIONS" title="Certifications" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {CERTIFICATIONS.map((cert, i) => (
          <Card key={i}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                color: 'var(--cyan)',
                fontSize: '0.68rem',
                letterSpacing: '2px',
                marginBottom: '0.75rem',
              }}
            >
              CERTIFICATE {String(i + 1).padStart(2, '0')}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              {cert.name}
            </h3>

            <div
              style={{
                color: 'var(--muted)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
              }}
            >
              Issued by {cert.issuer}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
