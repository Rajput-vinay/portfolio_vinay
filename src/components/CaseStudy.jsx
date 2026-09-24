import React from 'react';
import { Section, SectionHeader, TagRow } from './UI';

const phases=[
  ['01','Problem','Bring learning, institute operations and administrative workflows into one scalable portal.'],
  ['02','Architecture','MERN multi-tenant application with role-based access control and separate workflow modules.'],
  ['03','Intelligence','Use Gemini AI for timetable/exam generation and Inngest for background automation.'],
  ['04','Operations','Connect attendance, hostel, notifications and location-aware workflows through APIs and services.'],
];

export default function CaseStudy(){
  return <Section id="case-study">
    <SectionHeader num="03 / CASE STUDY" title="CampusSync" />
    <div className="case-study-shell">
      <div className="case-study-top">
        <div>
          <span className="case-study-label">NSTI KANPUR · FULL STACK SYSTEM</span>
          <h3>From institute workflows to a unified digital platform.</h3>
        </div>
        <a href="https://campus-sync-phi.vercel.app/" target="_blank" rel="noreferrer" className="case-study-live">OPEN LIVE ↗</a>
      </div>
      <div className="case-study-grid">
        {phases.map(([num,title,body])=><article className="case-study-step" key={num}>
          <span>{num}</span><h4>{title}</h4><p>{body}</p>
        </article>)}
      </div>
      <div className="case-study-bottom">
        <div><span className="case-study-label">STACK</span><TagRow tags={['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','Gemini AI','Inngest','Nodemailer','PositionStack API']}/></div>
        <div className="case-study-code"><span>DEPLOYMENT</span><strong>VERCEL</strong><span>REPOSITORY</span><a href="https://github.com/Rajput-vinay/campus_sync" target="_blank" rel="noreferrer">github.com/Rajput-vinay/campus_sync ↗</a></div>
      </div>
    </div>
  </Section>;
}
