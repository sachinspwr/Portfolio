import React from 'react';
import "../style/global.css";
import "../style/experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Professional Experience
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Feb 2023 – Present</div>
            <div className="timeline-content">
              <h3 className="timeline-title">
                Back-End Developer at Web Crypt Technologies | Pune
              </h3>
              
      
            </div>
            
          </div>
            <div className="timeline-content">
                <h4 className="timeline-subtitle">
                * Test-Engine (Assessment & Testing Platform)
              </h4>
              <ul className="timeline-list">
                <li>
                  Implemented scalable RESTful APIs using Spring Boot and
                  Node.js for test, user, and result management.
                </li>
                <li>
                  Integrated Payment Gateway, One-Compiler, and dynamic email
                  services for payments, code execution, and notifications.
                </li>
                <li>
                  Designed HTML email templates for invites, submissions, and
                  results.
                </li>
                <li>
                  Built logic for test submissions, link validation, question
                  checks, and role-based access for invited and registered
                  users.
                </li>
                <li>
                  Wrote stored procedures and triggers for accurate, optimized
                  result generation.
                </li>
                <li>
                  Enhanced RBAC with tenant/team roles and permission
                  hierarchies.
                </li>
                <li>
                  Managed subscriptions, tenant settings, and multi-tenant
                  rules.
                </li>
                <li>
                  Implemented basic, Google, and JWT authentication flows,
                  including user invites and onboarding.
                </li>
                <li>
                  Defined test heartbeat APIs to capture and update real-time
                  user activity.
                </li>
                <li>
                  Developed code evaluation logic with dynamic test case
                  checks via One-Compiler.
                </li>
                <li>
                  Used Redis, stored procedures, and triggers for efficient
                  data operations.
                </li>
                <li>
                  Deployed on Render with structured testing, logging, and
                  error handling.
                </li>
                <li>
                  Worked with QA/DevOps on CI/CD pipeline, log monitoring, and
                  system documentation.
                </li>
                <li>
                  Contributed to notifications, system configuration modules,
                  and code execution workflows.
                </li>
              </ul>
        </div>
        <div className="timeline-content">
            

              <h4 className="timeline-subtitle">
                * Agri-Connect (Agri-Tech Platform)
              </h4>
              <ul className="timeline-list">
                <li>
                  Designed and implemented secure authentication and
                  authorization using JWT and Google OAuth for external user
                  login.
                </li>
                <li>
                  Integrated Zoom API for scheduling meetings and live
                  sessions with agricultural experts.
                </li>
                <li>
                  Developed real-time chat support using WebSocket for instant
                  interaction and assistance.
                </li>
                <li>
                  Built RESTful APIs for community forums with group creation,
                  posting, liking, and commenting functionality.
                </li>
                <li>
                  Implemented crop disease detection and medicine
                  auto-suggestion using rule-based analysis.
                </li>
                <li>
                  Developed and managed generic reusable CRUD APIs across
                  multiple entities for scalable services.
                </li>
                <li>
                  Participated in requirement analysis, sprint planning, and
                  contributed to designing a scalable multi-tenant system.
                </li>
                <li>
                  Performed API testing, debugging, and deployment to ensure
                  stability across staging and production.
                </li>
                <li>
                  Coordinated with frontend, QA, and DevOps teams for smooth
                  releases, bug fixes, and enhancements.
                </li>
                <li>
                  Maintained detailed module documentation and ensured proper
                  version control using Git-based workflows.
                </li>
              </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;