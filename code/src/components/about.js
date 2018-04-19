import React from "react"
import "./about.css"

export default class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <div className="about-text-section">
          <h3>Who is Gunvor?</h3>
          <p>I am ..... </p>
          <p>I have worked in Telecom and IT for a long time,
          in different positions in Customer Services and Service Management.
          </p>
          <p>I hold a MSc in Mechanical Engineers and has
          also worked as a Software Designer with Climate Control and Telecom.
          </p>
          <p>From the pictures to the right you may get a
          deeper understanding of my interests and what I have been
          doing in my spare time.
          </p>
        </div>
        <div className="about-picture-section">
          <div className="about-picture">
            <img src={require("./images/hibiscus_DSC_0513.jpg")} alt="yellow hibiscus" />
          </div>
          <div className="about-picture">
            <img src={require("./images/killerwhale_DSC_0044_2.jpg")} alt="killer whale" />
          </div>
          <div className="about-picture">
            <img src={require("./images/turtle.png")} alt="turtle" />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
          <div className="about-picture">
            <img src={require("./images/Gunvor@1x.jpg")} alt="---later..." />
          </div>
        </div>
        <div className="footer">
          <p>Contact details:</p>
          <p>Phone number +46 70 ... ....</p>
          <p>Email: gunvor_a@........</p>
        </div>
      </div>
    )
  }
}
