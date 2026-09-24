import React from 'react';
import { Section, SectionHeader, Card, TagRow } from './UI';
import { SKILLS } from '../data';

export default function Skills(){
  return <Section id="skills">
    <SectionHeader num="02 / TECHNICAL" title="Skills"/>
    <div className="skills-grid">
      {SKILLS.map((s,i)=><Card key={i} style={{padding:'1.35rem'}}>
        <div className="skill-card">
          <div>
            <div className="skill-orbit"><span style={{fontFamily:"'Space Mono',monospace",fontSize:'.55rem',color:'var(--cyan)'}}>0{i+1}</span></div>
            <div style={{fontFamily:"'Space Mono',monospace",color:'var(--cyan)',fontSize:'.7rem',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'1rem'}}>{s.cat}</div>
          </div>
          <TagRow tags={s.tags}/>
        </div>
      </Card>)}
    </div>
  </Section>;
}