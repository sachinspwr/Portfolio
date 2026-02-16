// import React from 'react';
// import "../style/global.css";
// import "../style/skills.css";

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Languages & Frameworks",
//       skills: [
//         { name: "Java", level: 90 },
//         { name: "Spring Boot", level: 85 },
//         { name: "Node.js", level: 80 },
//         { name: "Express", level: 75 },
//         { name: "React Js", level: 85 },
//         { name: "MySQL", level: 70 },
//       ]
//     },
//     {
//       title: "Technologies",
//       skills: [
//         { name: "REST APIs", level: 90 },
//         { name: "Microservices", level: 80 },
//         { name: "MySQL", level: 85 },
//         { name: "Redis", level: 75 },
//         { name: "AWS (EC2, RDS, S3)", level: 70 },
//         { name: "Linux/Unix", level: 75 },
//         { name: "Zoom API", level: 70 },
//         { name: "Production Deployment", level: 80 },
//         { name: "Monitoring & Troubleshooting", level: 75 },
//       ]
//     },
//     {
//       title: "Integrations & APIs",
//       skills: [
//         { name: "API Integration", level: 85 },
//         { name: "Payment Gateway Integration", level: 80 },
//         { name: "Email Templates", level: 75 },
//         { name: "On-Render Deployment", level: 70 },
//         { name: "Google OAuth", level: 75 },
//         { name: "RBAC Management", level: 80 },
//         { name: "Test Case Evaluation", level: 75 },
//         { name: "Zoom API Integration", level: 70 },
//         { name: "Dynamic Email Service", level: 75 },
//       ]
//     },
//     {
//       title: "Tools & Practices",
//       skills: [
//         { name: "Git", level: 85 },
//         { name: "Postman", level: 80 },
//         { name: "Swagger", level: 75 },
//         { name: "Agile", level: 80 },
//         { name: "Azure DevOps", level: 70 },
//         { name: "ITIL Practices", level: 70 },
//         { name: "CI/CD & Documentation", level: 75 },
//         { name: "Requirement Analysis", level: 80 },
//         { name: "Production Support", level: 75 },
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="section skills-section">
//       <div className="container">
//         <h2 className="section-title"><span>02.</span> Technical Skills</h2>
//         <div className="skills-grid">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="skill-category">
//               <h3 className="skill-category-title">{category.title}</h3>
//               <ul className="skill-list">
//                 {category.skills.map((skill, skillIndex) => (
//                   <li key={skillIndex}>
//                     <span className="skill-name">{skill.name}</span>
//                     <span 
//                       className="skill-bar" 
//                       style={{ width: `${skill.level}%` }}
//                     ></span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import "../style/global.css";
import "../style/skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Backend Development",
      skills: "Java, Spring Boot, Node.js, Express.js, RESTful APIs, Microservices Architecture, JPA/Hibernate"
    },
    {
      category: "Frontend Development",
      skills: "React.js, HTML5, CSS3, JavaScript (ES6+), Responsive Design, State Management, Bootstrap, Tailwind CSS"
    },
    {
      category: "Database Management",
      skills: "MySQL, Redis, MongoDB, Database Design, Query Optimization, Data Modeling, Indexing Strategies"
    },
    {
      category: "Cloud & DevOps",
      skills: "AWS (EC2, RDS, S3), Azure DevOps, CI/CD Pipelines, Docker, Kubernetes, On-Render Deployment"
    },
    {
      category: "API & Integration",
      skills: "REST API Design, API Integration, Payment Gateway Integration, Google OAuth, Zoom API, Third-party APIs"
    },
    {
      category: "Development Tools",
      skills: "Git, GitHub, Postman, Swagger/OpenAPI, VS Code, IntelliJ IDEA, Eclipse, Maven, Gradle"
    },
    {
      category: "Testing & Quality",
      skills: "Unit Testing, Integration Testing, Test Case Evaluation, JUnit, Mockito, Postman Testing, Debugging"
    },
    {
      category: "Security & Authentication",
      skills: "RBAC Management, JWT, OAuth 2.0, Spring Security, HTTPS/SSL, Data Encryption, Secure API Design"
    },
    {
      category: "Professional Practices",
      skills: "Agile/Scrum, ITIL Practices, Requirement Analysis, Production Support, Documentation, Team Collaboration"
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title"><span>02.</span> Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              {/* <div className="skill-year">{skill.category}</div> */}
              <h3 className="skill-title">{skill.category}</h3>
              <p className="skill-description">{skill.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;