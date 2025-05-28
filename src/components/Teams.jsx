import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: "src/assets/images/team2.jpg",
    gmailLink: "mailto:ceo@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
  },
  {
    id: 2,
    image: "src/assets/images/team3.jpg",
    gmailLink: "mailto:manager@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Manager",
  },
  {
    id: 3,
    image: "src/assets/images/team8.jpg",
    gmailLink: "mailto:developer@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "Developer",
  },
  {
    id: 4,
    image: "src/assets/images/team6.jpg",
    gmailLink: "mailto:uiux@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

const Teams = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our team</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((data) => {
            return (
              <Col sm={3} key={data.id}>
                <div className="image">
                  <Image src={data.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={data.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href={data.gmailLink}>
                            <i className="fab fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{data.name}</h3>
                  <span className="designation">{data.designation}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
