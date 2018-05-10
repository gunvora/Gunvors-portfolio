import React from "react"
import { Link } from "react-router-dom"
import "./projects-list.css"
import data from "../data"

class ProjectsList extends React.Component {
  render() {
    return (
      <div className="container-project-list">
        <div className="projects-list-text">
          <h1>Projects</h1>
          <div className="intro-me">
          </div>
          <div>
            <h3>
              I am attending a boot camp to learn Front End Development.
            </h3>
            <h3>
              You are welcome to follow my journey to become
              a Front End Developer. Below you may browse some
              of the projects I have done. Some have been deployed
              and some will be at a later stage.
            </h3>
          </div>
        </div>

        <div className="projects-list-projects">
          {data.map(project => (
            <p className="projects-lists-one-project" key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-name-click">(click for more details)</div>
                </div>
                <div className="projects-list-container">
                  <img src={require(`./images/${project.image}`)} alt="..image.." />
                </div>
              </Link>
            </p>
          ))}
        </div>
      </div>
    )
  }
}

export default ProjectsList
