import React from "react";

function ProjectItem({ name, about, technologies }) {

  const Tech = technologies.map((element)=>
  <span key ={element}>{element}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {Tech}
      </div>
    </div>
  );
}

export default ProjectItem;

/**
 * Prop of technologies is passed down from ProjectList component.
 * .map method iterates over the technologies array
 */