import React from "react"
import "./show-project.css"
import data from "../data"

class ShowProject extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      project: null
    }
  }

  componentDidMount() {
    const project = data.find((project) => (
      project.id === this.props.match.params.projectId
    ))
    this.setState({
      project
    })
  }

  render() {
    if (this.state.project) {
      return (
        <div className="show-project-container">
          <div className="show-project-object">
            <div className="show-project-text-top">
              <h1>{this.state.project.name}</h1>
              <h3>Description</h3>

              <p>{this.state.project.description}</p>
            </div>
            <div className="show-project-image">
              <img src={require(`./images/${this.state.project.image}`)} />
            </div>
            <div className="show-project-text-bottom">
              <h3>Techniques used</h3>
                <p>{this.state.project.technique}</p>
            </div>
            <div className="show-project-text-project-link">
              <a href={this.state.project.link} target="_blank">Live project</a>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>Loading project..</div>
      )
    }
  }
}

export default ShowProject
