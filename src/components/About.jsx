import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import aboutImg from "../assets/images/aboutImg/aboutImg.jpg";

const About = () => {
  const webApp = 90;
  const mobileApp = 70;
  const uiuxDesign = 80;

  return (
    <section id="about" className="about about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">"Our Story, Our Values, Our Vision"</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image
              src={aboutImg}
              alt="About Us"
              className="image-hover"
              fluid
            />
          </Col>
          <Col sm={6}>
            <p>
              <i
                className="fa-solid fa-circle"
                style={{ color: "navy", fontSize: "11px" }}
              ></i>
              &nbsp; At Blue Origin, We are a team of passionate developers and
              dedicated to building
              <span style={{ display: "inline-block", marginLeft: "18px" }}>
                exceptional software solutions.
              </span>
            </p>

            <p>
              <i
                className="fa-solid fa-circle"
                style={{
                  color: "navy",
                  fontSize: "11px",
                }}
              ></i>
              &nbsp; By combining cutting-edge technology with industry
              insights, we help you stay ahead
              <span style={{ display: "inline-block", marginLeft: "18px" }}>
                in a fast-paced digital world.
              </span>
            </p>

            <p>
              <i
                className="fa-solid fa-circle"
                style={{ color: "navy", fontSize: "11px" }}
              ></i>
              &nbsp; Let’s build the future together, creating solutions that
              are not only functional but also
              <span style={{ display: "inline-block", marginLeft: "20px" }}>
                meaningful.
              </span>
            </p>

            <div className="progress-block">
              <h4 style={{ color: "navy" }}>Web-based Applictions</h4>
              <ProgressBar now={webApp} label={`${webApp}%`} />
            </div>
            <div className="progress-block">
              <h4 style={{ color: "navy" }}>Mobile Applications</h4>
              <ProgressBar now={mobileApp} label={`${mobileApp}%`} />
            </div>
            <div className="progress-block">
              <h4 style={{ color: "navy" }}>UI/UX Design</h4>
              <ProgressBar now={uiuxDesign} label={`${uiuxDesign}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
