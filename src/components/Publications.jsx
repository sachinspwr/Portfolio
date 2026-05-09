import React from 'react';
import "../style/global.css";
import "../style/publications.css";

const Publications = () => {
  const publications = [
    {
      title: "Eval Engine API Documentation",
      description: "Comprehensive REST API documentation for the Eval Engine platform — covering authentication, endpoints, request/response schemas, and integration guides.",
      tags: ["REST API", "Documentation", "Spring Boot", "Swagger"],
      link: "https://eval-engine-portal.onrender.com/",
      icon: "fas fa-book-open",
      year: "2026"
    }
  ];

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        <h2 className="section-title"><span>05.</span> Publications & Achievements</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="publication-year">{pub.year}</div>
              <div className="publication-icon">
                <i className={pub.icon}></i>
              </div>
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-description">{pub.description}</p>
              <div className="publication-tags">
                {pub.tags.map((tag, i) => (
                  <span key={i} className="publication-tag">{tag}</span>
                ))}
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
              >
                View Publication <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
