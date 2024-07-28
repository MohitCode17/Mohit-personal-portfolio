import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mt-16 sm:mt-32 mb-10 sm:mb-14 scroll-mt-32"
    >
      <h1 className="font-semibold text-3xl sm:text-4xl mb-12 text-tubeLight-effect text-center">
        Project Highlights
      </h1>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project._id}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
