import React from 'react';

/* ── Section wrapper ── */
export function Section({ id, children, style = {} }) {
  return (
    <section id={id} className="portfolio-section reveal is-visible" style={{
      position:'relative', zIndex:1, padding:'5rem 3rem', maxWidth:'1100px', margin:'0 auto', ...style
    }}>
      {children}
    </section>
  );
}

/* ── Section header ── */
export function SectionHeader({ num, title }) {
  return (
    <div className="section-header" style={{ marginBottom:'3rem' }}>
      <span style={{fontFamily:"'Space Mono', monospace",color:'var(--cyan)',fontSize:'0.7rem',letterSpacing:'4px',display:'block',marginBottom:'0.5rem'}}>{num}</span>
      <h2 style={{fontSize:'2.5rem',fontWeight:800,letterSpacing:'-1px'}}>{title}</h2>
      <div style={{width:'60px',height:'2px',background:'var(--cyan)',marginTop:'0.75rem',opacity:0.6}} />
    </div>
  );
}

/* ── Interactive 3D card ── */
export function Card({ children, style = {} }) {
  const [hovered,setHovered]=React.useState(false);
  const [tilt,setTilt]=React.useState({x:0,y:0});
  const handleMove=e=>{
    const r=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-0.5, y=(e.clientY-r.top)/r.height-0.5;
    setTilt({x:y*-6,y:x*6});
  };
  const reset=()=>{setHovered(false);setTilt({x:0,y:0});};
  return <div onMouseEnter={()=>setHovered(true)} onMouseMove={handleMove} onMouseLeave={reset} className="tilt-card" style={{
    background:'var(--bg2)',border:`1px solid ${hovered?'var(--border2)':'var(--border)'}`,padding:'1.5rem',
    borderRadius:'2px',position:'relative',overflow:'hidden',
    transform:`perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered?-5:0}px)`,
    boxShadow:hovered?'0 24px 55px rgba(0,0,0,.42), 0 0 28px var(--cyan3)':'none',
    transition:'border-color .3s,transform .18s ease-out,box-shadow .3s',...style
  }}>
    <div className="card-shine" />
    <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--cyan),transparent)',opacity:hovered?1:0,transition:'opacity .3s'}} />
    <div style={{position:'relative',zIndex:1}}>{children}</div>
  </div>;
}

export function Tag({ children }) {
  const [hovered,setHovered]=React.useState(false);
  return <span onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} style={{
    padding:'0.3rem 0.75rem',background:hovered?'var(--cyan3)':'var(--bg3)',border:`1px solid ${hovered?'var(--cyan)':'var(--border)'}`,
    color:hovered?'var(--cyan)':'var(--text)',fontFamily:"'Space Mono', monospace",fontSize:'0.68rem',letterSpacing:'1px',
    borderRadius:'1px',display:'inline-block',transition:'all .2s',cursor:'default',transform:hovered?'translateY(-2px)':'none'
  }}>{children}</span>;
}
export function TagRow({ tags }) {
  return <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem'}}>{tags.map((t,i)=><Tag key={i}>{t}</Tag>)}</div>;
}

export function BtnPrimary({ children,onClick,style={} }) {
  return <button onClick={onClick} style={{padding:'0.75rem 2rem',background:'var(--cyan)',color:'#000',fontWeight:700,border:'none',cursor:'pointer',
    fontFamily:"'Space Mono', monospace",fontSize:'0.78rem',letterSpacing:'2px',clipPath:'polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px)',
    transition:'transform .2s,opacity .2s',...style}}
    onMouseEnter={e=>{e.currentTarget.style.opacity='.85';e.currentTarget.style.transform='translateY(-2px)'}}
    onMouseLeave={e=>{e.currentTarget.style.opacity='1';e.currentTarget.style.transform='translateY(0)'}}>{children}</button>;
}
export function BtnSecondary({ children,onClick,style={} }) {
  return <button onClick={onClick} style={{padding:'0.75rem 2rem',background:'transparent',color:'var(--cyan)',fontWeight:700,border:'1px solid var(--border2)',cursor:'pointer',
    fontFamily:"'Space Mono', monospace",fontSize:'0.78rem',letterSpacing:'2px',transition:'background .2s,transform .2s',...style}}
    onMouseEnter={e=>{e.currentTarget.style.background='var(--cyan3)';e.currentTarget.style.transform='translateY(-2px)'}}
    onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.transform='translateY(0)'}}>{children}</button>;
}
