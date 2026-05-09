import React, { useState } from 'react';
import "../style/global.css";
import "../style/experience.css";

const Experience = () => {
  const [activeProject, setActiveProject] = useState(0);

  const organisation = {
    name: "Web Crypt Technologies",
    location: "Pune, India",
    role: "Back-End Developer",
    duration: "Feb 2023 – Present",
    type: "Full-Time",
    about: "Web Crypt Technologies is a product-based software company focused on building scalable SaaS platforms. The company specializes in assessment tools, agri-tech solutions, and enterprise-grade backend systems using modern cloud-ready technologies.",
    tech: ["Java", "Spring Boot", "Node.js", "MySQL", "Redis", "AWS", "React"]
  };

  const projects = [
    {
      name: "Test-Engine (Assessment & Testing Platform)",
      responsibilities: [
        "Implemented scalable RESTful APIs using Spring Boot and Node.js for test, user, and result management.",
        "Integrated Payment Gateway, One-Compiler, and dynamic email services for payments, code execution, and notifications.",
        "Designed HTML email templates for invites, submissions, and results.",
        "Built logic for test submissions, link validation, question checks, and role-based access for invited and registered users.",
        "Wrote stored procedures and triggers for accurate, optimized result generation.",
        "Enhanced RBAC with tenant/team roles and permission hierarchies.",
        "Managed subscriptions, tenant settings, and multi-tenant rules.",
        "Implemented basic, Google, and JWT authentication flows, including user invites and onboarding.",
        "Defined test heartbeat APIs to capture and update real-time user activity.",
        "Developed code evaluation logic with dynamic test case checks via One-Compiler.",
        "Used Redis, stored procedures, and triggers for efficient data operations.",
        "Deployed on Render with structured testing, logging, and error handling.",
        "Worked with QA/DevOps on CI/CD pipeline, log monitoring, and system documentation.",
        "Contributed to notifications, system configuration modules, and code execution workflows."
      ]
    },
    {
      name: "Agri-Connect (Agri-Tech Platform)",
      responsibilities: [
        "Designed and implemented secure authentication and authorization using JWT and Google OAuth for external user login.",
        "Integrated Zoom API for scheduling meetings and live sessions with agricultural experts.",
        "Developed real-time chat support using WebSocket for instant interaction and assistance.",
        "Built RESTful APIs for community forums with group creation, posting, liking, and commenting functionality.",
        "Implemented crop disease detection and medicine auto-suggestion using rule-based analysis.",
        "Developed and managed generic reusable CRUD APIs across multiple entities for scalable services.",
        "Participated in requirement analysis, sprint planning, and contributed to designing a scalable multi-tenant system.",
        "Performed API testing, debugging, and deployment to ensure stability across staging and production.",
        "Coordinated with frontend, QA, and DevOps teams for smooth releases, bug fixes, and enhancements.",
        "Maintained detailed module documentation and ensured proper version control using Git-based workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title"><span>03.</span> Professional Experience</h2>

        {/* Organisation Card */}
        <div className="org-card">
          <div className="org-header">
            <div className="org-info">
              <h3 className="org-name">{organisation.name}</h3>
              <p className="org-location"><i className="fas fa-map-marker-alt"></i> {organisation.location}</p>
            </div>
            <div className="org-meta">
              <span className="org-role"><i className="fas fa-briefcase"></i> {organisation.role}</span>
              <span className="org-duration"><i className="fas fa-calendar-alt"></i> {organisation.duration}</span>
              <span className="org-type">{organisation.type}</span>
            </div>
          </div>
          <p className="org-about">{organisation.about}</p>
          <div className="org-tech">
            {organisation.tech.map((t, i) => (
              <span key={i} className="org-tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="projects-section">
          <h3 className="projects-heading">Projects & Work</h3>

          <div className="project-tabs">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                {project.name}
              </button>
            ))}
          </div>

          <div className="project-content">
            <h4 className="project-name">
              <i className="fas fa-rocket"></i> {projects[activeProject].name}
            </h4>
            <ul className="timeline-list">
              {projects[activeProject].responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
