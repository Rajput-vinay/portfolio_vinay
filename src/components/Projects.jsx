import React from "react";
import { Section, SectionHeader, TagRow } from "./UI";
import { PROJECT_CATEGORIES } from "../data";

function FeaturedCampusSync() {
  return (
    <article className="project-feature">
      <div className="project-feature-visual" aria-hidden="true">
        <div className="project-feature-screen">
          <div className="project-feature-lines"><span/><span/><span/><span/></div>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{font:'10px Space Mono,monospace',color:'var(--cyan)',letterSpacing:'3px',marginBottom:'.75rem'}}>FEATURED / 01</div>
        <h3 style={{fontSize:'2rem',marginBottom:'.5rem'}}>CampusSync</h3>
        <p style={{color:'var(--cyan)',font:'11px Space Mono,monospace',letterSpacing:'1px',marginBottom:'1rem'}}>MERN LMS & INSTITUTE MANAGEMENT PORTAL</p>
        <p style={{color:'var(--muted)',fontSize:'.85rem',lineHeight:1.8,marginBottom:'1rem'}}>A full-stack institute platform built for NSTI Kanpur with multi-tenant architecture, role-based access, attendance, hostel workflows and AI-powered academic automation.</p>
        <div style={{marginBottom:'1.2rem'}}><TagRow tags={['React.js','Node.js','MongoDB','Gemini AI','Inngest','Tailwind CSS']}/></div>
        <div className="project-links">
          <a className="project-link project-link-live" href="https://campus-sync-phi.vercel.app/" target="_blank" rel="noopener noreferrer">OPEN LIVE ↗</a>
          <a className="project-link" href="https://github.com/Rajput-vinay/campus_sync" target="_blank" rel="noopener noreferrer">SOURCE ↗</a>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-card-glow" style={{ opacity: hovered ? 1 : 0 }} />

      <div className="project-card-top">
        <span className="project-number">{project.num}</span>

        <div className="project-links">
          {project.live && project.liveLink && (
            <a className="project-link project-link-live" href={project.liveLink} target="_blank" rel="noopener noreferrer">
              LIVE ↗
            </a>
          )}
          {project.githubLink && (
            <a className="project-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GITHUB ↗
            </a>
          )}
        </div>
      </div>

      <div className="project-title-row">
        <h3>{project.name}</h3>
        <span className="project-deploy">▲ {project.deploy}</span>
      </div>

      <p className="project-tagline">{project.tagline}</p>

      <div className="project-highlights">
        {project.highlights.map((highlight, j) => (
          <div className="project-highlight" key={j}>
            <span>▸</span>
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="project-stack">
        <div className="project-stack-label">TECH STACK</div>
        <TagRow tags={project.stack} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader num="03 / WORK" title="Projects" />

      <FeaturedCampusSync />

      <div className="project-categories">
        {PROJECT_CATEGORIES.map((category) => (
          <div className="project-category" key={category.key}>
            <div className="project-category-heading">
              <div>
                <span className="project-category-code project-marquee">{category.code} • {category.code} • {category.code}</span>
                <h3 className="project-category-title">{category.label}</h3>
              </div>
              <span className="project-count">{String(category.projects.length).padStart(2, "0")} PROJECTS</span>
            </div>

            <div className="projects-grid">
              {category.projects.map((project, index) => (
                <ProjectCard key={`${category.key}-${project.name}`} project={project} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
