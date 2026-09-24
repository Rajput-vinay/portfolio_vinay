import React, { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';
import GitHubActivity from './components/GitHubActivity';
import Footer from './components/Footer';

function ThreeDScene() {
  const nodes=Array.from({length:24},(_,i)=>({left:(i*37)%100,top:(i*61)%100,size:3+(i%4),delay:(i%8)*-.7,duration:8+(i%6)}));
  return <div className="scene-3d" aria-hidden="true">
    <div className="scene-orbit scene-orbit-one"/><div className="scene-orbit scene-orbit-two"/>
    <div className="scene-cube"><span/><span/><span/><span/><span/><span/></div><div className="scene-core"/>
    {nodes.map((n,i)=><span key={i} className="scene-node" style={{left:`${n.left}%`,top:`${n.top}%`,width:n.size,height:n.size,animationDelay:`${n.delay}s`,animationDuration:`${n.duration}s`}}/>)}
  </div>;
}
function GridBg(){return <div style={{position:'fixed',inset:0,pointerEvents:'none',zIndex:0,backgroundImage:'linear-gradient(rgba(0,229,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.03) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>}
function CursorGlow({x,y}){return <div style={{position:'fixed',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,229,255,.04) 0%,transparent 70%)',pointerEvents:'none',zIndex:0,left:x,top:y,transform:'translate(-50%,-50%)',transition:'left .4s ease,top .4s ease'}}/>}
function Toast({message}){if(!message)return null;return <div style={{position:'fixed',bottom:'2rem',right:'2rem',zIndex:999,background:'var(--cyan)',color:'#000',padding:'.75rem 1.5rem',fontFamily:"'Space Mono',monospace",fontSize:'.78rem',letterSpacing:'2px',animation:'toast-in .3s forwards'}}>{message}</div>}

export default function App(){
  const [activeSection,setActiveSection]=useState('about');
  const [cursor,setCursor]=useState({x:-999,y:-999});
  const [toast,setToast]=useState('');
  useEffect(()=>{const move=e=>setCursor({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[]);
  useEffect(()=>{
    const revealObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
    const sectionObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActiveSection(e.target.id)}),{threshold:.2,rootMargin:'-60px 0px -40% 0px'});
    NAV_ITEMS.forEach(id=>{const el=document.getElementById(id);if(el)sectionObs.observe(el)});
    return()=>{revealObs.disconnect();sectionObs.disconnect()};
  },[]);
  const scrollTo=useCallback(id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),[]);
  const showToast=useCallback(msg=>{setToast(msg);setTimeout(()=>setToast(''),2500)},[]);
  return <>
    <ThreeDScene/><GridBg/><CursorGlow x={cursor.x} y={cursor.y}/><Navbar active={activeSection} scrollTo={scrollTo}/>
    <main><Hero scrollTo={scrollTo}/><Qualification/><Skills/><CaseStudy/><Projects/><Experience/><Activities/><Certifications/><GitHubActivity/><Contact showToast={showToast}/></main>
    <Footer/><Toast message={toast}/>
  </>;
}
