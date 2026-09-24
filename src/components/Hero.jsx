import React from 'react';
import { BtnPrimary, BtnSecondary } from './UI';

const PROFILE_IMAGE = 'https://avatars.githubusercontent.com/u/105452265?s=400&u=9f5fc5f3abe67eba5f3852e86b81d8dbbc7d6096&v=4';

const SOCIALS = [
  { label: 'GitHub ↗',   href: 'https://github.com/Rajput-vinay' },
  { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/vinay-rajput-984668227' },
  { label: '✉ Email',    href: 'mailto:vinaryrajput2004vr@gmail.com' },
  { label: '✆ Phone',    href: 'tel:+919927903610' },
];

function SocialLink({ label, href }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '2px',
        color: hovered ? 'var(--cyan)' : 'var(--muted)',
        textDecoration: 'none',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        background: hovered ? 'var(--cyan3)' : 'transparent',
        padding: '0.35rem 0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </a>
  );
}

export default function Hero({ scrollTo }) {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '6rem 3rem 5rem',
        maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1,
      }}
    >
      <div className="hero-photo-wrap">
        <div className="hero-photo-ring" />
        <img
          className="hero-photo"
          src={PROFILE_IMAGE}
          alt="Vinay Rajput"
          loading="eager"
        />
      </div>

      <div className="hero-content">
        <div style={{
          fontFamily: "'Space Mono', monospace", color: 'var(--cyan)',
          fontSize: '0.75rem', letterSpacing: '4px', marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          opacity: 0, animation: 'fadeUp 0.6s 0.2s forwards',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--cyan)', display: 'inline-block', animation: 'pulse 1.5s infinite',
          }} />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 className="hero-name" aria-label="Vinay Rajput">
          <span className="hero-name-line">
            {'Vinay'.split('').map((char, i) => (
              <span className="hero-letter hero-letter-light" key={`v-${i}`} style={{ animationDelay: `${0.45 + i * 0.06}s` }}>{char}</span>
            ))}
          </span>
          <span className="hero-name-line hero-name-accent">
            {'Rajput'.split('').map((char, i) => (
              <span className="hero-letter" key={`r-${i}`} style={{ animationDelay: `${0.8 + i * 0.06}s` }}>{char}</span>
            ))}
            <span className="hero-name-scan" />
          </span>
        </h1>

        <p style={{
          fontFamily: "'Space Mono', monospace", fontSize: '1rem',
          color: 'var(--muted)', marginTop: '1rem', letterSpacing: '2px',
          opacity: 0, animation: 'fadeUp 0.6s 0.6s forwards',
        }}>
          // Software Developer · Agra, India
        </p>

        <p style={{
          maxWidth: '520px', marginTop: '1.5rem', color: 'var(--muted)',
          lineHeight: 1.8, fontSize: '0.95rem',
          opacity: 0, animation: 'fadeUp 0.6s 0.8s forwards',
        }}>
          Full-stack developer passionate about building scalable web applications and
          AI-powered tools. Proficient in the MERN stack with hands-on industry experience.
        </p>

        <div style={{
          marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap',
          opacity: 0, animation: 'fadeUp 0.6s 1s forwards',
        }}>
          <BtnPrimary onClick={() => scrollTo('projects')}>VIEW PROJECTS</BtnPrimary>
          <BtnSecondary onClick={() => scrollTo('contact')}>CONTACT ME</BtnSecondary>
          <a
            href="/Vinay_Rajput_Resume%20%282%29.pdf"
            download="Vinay_Rajput_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 2rem',
              background: 'transparent',
              color: 'var(--cyan)',
              fontWeight: 700,
              border: '1px solid var(--border2)',
              cursor: 'pointer',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.78rem',
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
            }}
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>

        <div style={{
          marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
          opacity: 0, animation: 'fadeUp 0.6s 1.2s forwards',
        }}>
          {SOCIALS.map((s, i) => <SocialLink key={i} {...s} />)}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '3rem', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
        color: 'var(--muted)', letterSpacing: '3px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        animation: 'bounce 2s infinite',
      }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--cyan), transparent)' }} />
        SCROLL
      </div>
    </section>
  );
}
