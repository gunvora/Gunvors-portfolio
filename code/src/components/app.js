import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import About from "./about.js"
import ProjectsList from "./projects-list.js"
import ShowProject from "./show-project.js"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>Gunvor Andersson - Front End Development</h1>
        </div>
        <BrowserRouter>
          <div>
            <div>
              <ul className="header-links">
                <li><Link to="">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>
              </ul>
            </div>

            <Route exact path="/" component={ProjectsList} />
            <Route path="/about" component={About} />
            <Route path="/projects/:projectId" component={ShowProject} />

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
