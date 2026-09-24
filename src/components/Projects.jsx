import React from "react";
import { Section, SectionHeader, TagRow } from "./UI";
import { PROJECT_CATEGORIES } from "../data";

function FeaturedCampusSync() {
  const featured = [
    { name:'CampusSync', code:'01', url:'https://campus-sync-phi.vercel.app/', github:'https://github.com/Rajput-vinay/campus_sync', tagline:'MERN LMS & Institute Management Portal', text:'Multi-tenant institute platform for NSTI Kanpur with RBAC, attendance, hostel workflows and AI-powered academic automation.' },
    { name:'Vidya-Sankalp', code:'02', url:'https://vidya-sankalp.vercel.app/', github:'https://github.com/Rajput-vinay/Vidya-Sankalp', tagline:'Ed-Tech Learning Platform', text:'Interactive coding education platform with course discovery, learning workflows and responsive student experiences.' },
    { name:'Thunder.ai', code:'03', url:'https://thunder-ai-sigma.vercel.app/', github:'https://github.com/Rajput-vinay/thunder.ai', tagline:'AI-Powered Website Generator', text:'AI-driven project generation experience with Gemini, React previews and a workflow for creating functional websites.' },
  ];
  return (
    <div className="featured-projects">
      <div className="featured-heading">
        <div>
          <span className="project-category-code">00 / FEATURED BUILDS</span>
          <h3>Selected Work</h3>
        </div>
        <span className="featured-status">LIVE PREVIEWS // 03</span>
      </div>
      <div className="featured-grid">
        {featured.map((p) => (
          <article className="featured-project" key={p.name}>
            <div className="browser-frame">
              <div className="browser-top">
                <span className="browser-dots"><i/><i/><i/></span>
                <span className="browser-url">{p.url.replace('https://','')}</span>
                <span className="browser-live">LIVE</span>
              </div>
              <div className="browser-screen">
                <iframe title={p.name + ' live preview'} src={p.url} loading="lazy" />
                <div className="preview-overlay">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">OPEN FULL SITE ↗</a>
                </div>
              </div>
            </div>
            <div className="featured-project-body">
              <div className="featured-project-meta"><span>{p.code}</span><span>LIVE BUILD</span></div>
              <h4>{p.name}</h4>
              <p className="featured-tagline">{p.tagline}</p>
              <p className="featured-description">{p.text}</p>
              <div className="project-links">
                <a className="project-link project-link-live" href={p.url} target="_blank" rel="noopener noreferrer">LIVE ↗</a>
                <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
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
