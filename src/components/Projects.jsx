import React from "react";
import { Section, SectionHeader, TagRow } from "./UI";
import { PROJECTS } from "../data";

function ProjectCard({ project }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg2)",
        border: `1px solid ${hovered ? "var(--border2)" : "var(--border)"}`,
        borderRadius: "2px",
        overflow: "hidden",
        position: "relative",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 48px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s",
      }}
    >
      {/* top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, var(--cyan), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Header */}
      <div style={{ padding: "1.5rem 1.5rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--muted)",
              fontSize: "0.7rem",
              letterSpacing: "2px",
            }}
          >
            {project.num}
          </span>
          {project.live && (
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "2px",
                color: "var(--cyan)",
                border: "1px solid var(--border2)",
                padding: "0.2rem 0.6rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    animation: "pulse 1.5s infinite",
                    cursor: "pointer",
                  }}
                />
                LIVE
              </a>
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "1px",
              border: "1px solid var(--border)",
              padding: "0.15rem 0.5rem",
            }}
          >
            ▲ {project.deploy}
          </span>
        </div>

        <p
          style={{
            color: "var(--cyan)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "2px",
            marginBottom: "1rem",
            opacity: 0.8,
          }}
        >
          {project.tagline}
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          {project.highlights.map((h, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                marginBottom: "0.4rem",
              }}
            >
              <span
                style={{
                  color: "var(--cyan)",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                ▸
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text)",
                  lineHeight: 1.65,
                }}
              >
                {h}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "3px",
              color: "var(--muted)",
              marginBottom: "0.6rem",
            }}
          >
            TECH STACK
          </div>
          <TagRow tags={project.stack} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader num="03 / WORK" title="Projects" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
  );
}
