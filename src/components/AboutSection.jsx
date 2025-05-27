import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

const AboutSection = () => {
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
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              At BLUE ORBIT, we are a team of passionate developers and creative
              thinkers dedicated to building exceptional software solutions. Our
              mission is to deliver innovative products that solve real-world
              problems and empower businesses to grow.
            </p>

            <p>
              We believe in the power of collaboration, continuous learning, and
              a customer-first mindset. By combining cutting-edge technology
              with industry insights, we help you stay ahead in a fast-paced
              digital world. Let’s build the future together, creating solutions
              that are not only functional but also meaningful.
            </p>
            <div className="progress-block">
              <h4>Web-based Applictions</h4>
              <ProgressBar now={webApp} label={`${webApp}%`} />
            </div>
            <div className="progress-block">
              <h4>Mobile Applications</h4>
              <ProgressBar now={mobileApp} label={`${mobileApp}%`} />
            </div>
            <div className="progress-block">
              <h4>UI/UX Design</h4>
              <ProgressBar now={uiuxDesign} label={`${uiuxDesign}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
