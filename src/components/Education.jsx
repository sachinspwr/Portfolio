import React from 'react';
import "../style/global.css";
import "../style/education.css";

const Education = () => {
  const educationData = [
    { year: "2022", degree: "BE", institute: "Savitribai Phule Pune University", grade: "8.83 CGPA" },
    { year: "2019", degree: "Diploma", institute: "MSBTE", grade: "75.71%" },
    { year: "2015", degree: "SSC", institute: "Maharashtra State Board", grade: "82.60%" }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title"><span>04.</span> Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-year">{edu.year}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institute">{edu.institute}</p>
              <p className="education-grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;