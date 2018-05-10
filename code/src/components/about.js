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
            <img src={require("./images/hibiscus_DSC_0513.jpg")} alt="yellow_hibiscus" />
          </div>
          <div className="about-picture">
            <img src={require("./images/DSC_0044.JPG")} alt="killer_whale" />
          </div>
          <div className="about-picture">
            <img src={require("./images/turtle.png")} alt="turtle" />
          </div>
          <div className="about-picture">
            <img src={require("./images/DSCN2057.jpg")} alt="huitres_bretagne" />
          </div>
          <div className="about-picture">
            <img src={require("./images/div 003.jpg")} alt="sunflower" />
          </div>
          <div className="about-picture">
            <img src={require("./images/DSC_0154.JPG")} alt="Sweden_footboll" />
          </div>
          <div className="about-picture">
            <img src={require("./images/CIMG1203.JPG")} alt="Cook_Island" />
          </div>
          <div className="about-picture">
            <img src={require("./images/DSC_0247.JPG")} alt="pink_hibiscus_barbeque" />
          </div>
          <div className="about-picture">
            <img src={require("./images/DSC_0246.JPG")} alt="summer_in_Swedish_archipelago" />
          </div>
          <div className="about-picture">
            <img src={require("./images/IMGP0277.JPG")} alt="orchide" />
          </div>
        </div>
        <div className="footer">
          <footer>
            <p>Contact details:</p>
            <p>Gunvor Andersson</p>
            <p>Phone number +46 70 ... ....</p>
            <p>Contact information:
              <a href="mailto:gunvor_a@example.com">
              gunvor_a@example.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    )
  }
}
