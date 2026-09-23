import React, { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from './data';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Qualification from './components/Qualification';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import Activities  from './components/Activities';
import Certifications from './components/Certifications';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

function GridBg() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      backgroundImage:
        'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), ' +
        'linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }} />
  );
}

function CursorGlow({ x, y }) {
  return (
    <div style={{
      position: 'fixed', width: '400px', height: '400px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
      left: x, top: y,
      transform: 'translate(-50%, -50%)',
      transition: 'left 0.4s ease, top 0.4s ease',
    }} />
  );
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div style={{
      position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999,
      background: 'var(--cyan)', color: '#000',
      padding: '0.75rem 1.5rem',
      fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', letterSpacing: '2px',
      animation: 'toast-in 0.3s forwards',
    }}>
      {message}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursor, setCursor] = useState({ x: -999, y: -999 });
  const [toast, setToast] = useState('');

  useEffect(() => {
    const onMove = e => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' }
    );
    NAV_ITEMS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const showToast = useCallback(msg => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }, []);

  return (
    <>
      <GridBg />
      <CursorGlow x={cursor.x} y={cursor.y} />
      <Navbar active={activeSection} scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />
        <Qualification />
        <Skills />
        <Projects />
        <Experience />
        <Activities />
        <Certifications />
        <Contact showToast={showToast} />
      </main>

      <Footer />
      <Toast message={toast} />
    </>
  );
}
