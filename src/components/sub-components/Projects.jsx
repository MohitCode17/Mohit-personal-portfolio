import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="mt-16 sm:mt-32 mb-20 sm:mb-14 scroll-mt-32"
    >
      <h1 className="font-semibold text-3xl sm:text-4xl mb-16 text-tubeLight-effect text-center">
        Project Highlights
      </h1>
      <div className="grid gap-10 sm:gap-10">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
