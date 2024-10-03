import React, { useState } from "react";
import "./Project.css"; // External CSS file for styling
import sklogo from "../Assets/Sk logo.jpg";
import Github from "../Assets/github.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    id: 1,
    title: "Frontend Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techStack: [
      "HTML 5",
      "CSS 3",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    image: sklogo,
    projectsite: "https://example.com",
    github: "https://example.com",
  },
  {
    id: 2,
    title: "Backend Project",
    description:
      "Backend logic and server-side code. Lorem ipsum dolor sit amet.",
    techStack: ["Node.js", "Express", "MongoDB"],
    image: sklogo,
    projectsite: "https://example.com",
    github: "https://example.com",
  },
  {
    id: 3,
    title: "Fullstack Project",
    description: "Full stack development with front and back-end integration.",
    techStack: ["React", "Node.js", "MySQL"],
    image: sklogo,
    projectsite: "https://example.com",
    github: "https://example.com",
  },
  {
    id: 4,
    title: "Mobile App",
    description: "Mobile app development with cross-platform solutions.",
    techStack: ["Flutter", "Dart", "Firebase"],
    image: sklogo,
    projectsite: "https://example.com",
    github: "https://example.com",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div id="Project">
        <h2>
          PRO<span>JE</span>C<span>T</span>S
        </h2>

        <section className="project-section">
          <div className="project-slider-container">
            <div
              className="project-slider"
              style={{
                transform: `translateX(${-currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {projects.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-details">
                    <div className="details-left">
                      <h1>{`0${project.id}`}</h1>
                      <h3>{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="tech-stack">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-link">
                        <a
                          href={project.projectsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="arrow-button"
                        >
                          <OpenInNewIcon
                            style={{
                              cursor: "pointer",
                              fontSize: "30px",
                              color: "#ccc",
                            }}
                          />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-button"
                        >
                          <GitHubIcon
                            style={{
                              cursor: "pointer",
                              fontSize: "50px",
                              color: "#00d0ff",
                            }}
                            className="github-icon"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="details-right">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="project-buttons">
              <button
                className="prev-button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="next-button"
                onClick={handleNext}
                disabled={currentIndex === projects.length - 1}
                style={{
                  opacity: currentIndex === projects.length - 1 ? 0.5 : 1,
                }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </section>
      </div>
        <div className="line2"></div>
    </>
  );
};

export default Project;
