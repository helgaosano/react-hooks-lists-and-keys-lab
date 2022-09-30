import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const MyProjects=projects.map((data)=>

  <ProjectItem key={data.id} 
      name = {data.name} 
      about = {data.about}
      technologies = {data.technologies}
   />

  )
 console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{MyProjects}</div>
    </div>
  );
}

export default ProjectList;

/**
 * A prop of projects is passed down from the App component(Parent component to ProjectList) with an 
 * array of objects.
 * In line 6, For each object in the array, one ProjectItem component is rendered with correct props
 * For the key prop, we use the id of the project as in line 8.
 * In the JSX, we have MyProjects passed as props
 */