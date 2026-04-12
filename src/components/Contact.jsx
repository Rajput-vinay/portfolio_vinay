import React, { useState } from 'react';
import { Section, SectionHeader, BtnPrimary } from './UI';
import { CONTACT_INFO } from '../data';

function FormInput({ label, type = 'text', placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontFamily: "'Space Mono', monospace",
        fontSize: '0.68rem', letterSpacing: '3px', color: 'var(--muted)',
        marginBottom: '0.5rem', textTransform: 'uppercase',
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'var(--bg2)',
          border: `1px solid ${focused ? 'var(--cyan)' : 'var(--border)'}`,
          padding: '0.75rem 1rem', color: 'var(--text)',
          fontFamily: "'Syne', sans-serif", fontSize: '0.9rem',
          outline: 'none', borderRadius: '1px', transition: 'border-color 0.2s',
        }}
      />
    </div>
  );
}

function FormTextarea({ label, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontFamily: "'Space Mono', monospace",
        fontSize: '0.68rem', letterSpacing: '3px', color: 'var(--muted)',
        marginBottom: '0.5rem', textTransform: 'uppercase',
      }}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        style={{
          width: '100%', background: 'var(--bg2)',
          border: `1px solid ${focused ? 'var(--cyan)' : 'var(--border)'}`,
          padding: '0.75rem 1rem', color: 'var(--text)',
          fontFamily: "'Syne', sans-serif", fontSize: '0.9rem',
          outline: 'none', borderRadius: '1px', transition: 'border-color 0.2s',
          resize: 'vertical',
        }}
      />
    </div>
  );
}

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill all fields');
      return;
    }
    showToast('Message sent! ✓');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <SectionHeader num="06 / CONNECT" title="Contact" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
      }}>
        {/* Left: Info */}
        <div>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            I'm currently open to new opportunities. Whether you have a project in mind,
            a collaboration idea, or just want to say hello — feel free to reach out!
          </p>

          {CONTACT_INFO.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.9rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--cyan)', fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', minWidth: '18px' }}>
                {c.icon}
              </span>
              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '0.62rem',
                  letterSpacing: '2px', color: 'var(--muted)', marginBottom: '0.15rem',
                }}>
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: '0.85rem', wordBreak: 'break-all' }}
                  >
                    {c.val}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text)', fontSize: '0.85rem' }}>{c.val}</span>
                )}
              </div>
            </div>
          ))}

          {/* Social buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {[
              { label: 'GitHub ↗',   href: 'https://github.com/Rajput-vinay' },
              { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/vinay-rajput-984668227' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '2px',
                  color: 'var(--cyan)', textDecoration: 'none',
                  border: '1px solid var(--border2)', padding: '0.35rem 0.85rem',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--cyan3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <FormInput
            label="Your Name" placeholder="John Doe"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <FormInput
            label="Email Address" type="email" placeholder="john@example.com"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <FormTextarea
            label="Message" placeholder="Tell me about your project..."
            value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <BtnPrimary onClick={handleSubmit} style={{ width: '100%' }}>
            SEND MESSAGE
          </BtnPrimary>
        </div>
      </div>
    </Section>
  );
}
