import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

import team1 from "../assets/images/teamImg/team1.jpg";
import team2 from "../assets/images/teamImg/team2.jpg";
import team3 from "../assets/images/teamImg/team3.jpg";
import team4 from "../assets/images/teamImg/team4.jpg";
import team5 from "../assets/images/teamImg/team5.jpg";
import team6 from "../assets/images/teamImg/team6.jpg";
import team7 from "../assets/images/teamImg/team7.jpg";
import team8 from "../assets/images/teamImg/team8.jpg";

const teamsData = [
  {
    id: 1,
    image: team1,
    gmailLink: "mailto:founderandchairman@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Tony Stark",
    designation: "Founder & Chairman",
  },
  {
    id: 2,
    image: team2,
    gmailLink: "mailto:ceo@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Pepper Potts",
    designation: "CEO",
  },
  {
    id: 3,
    image: team3,
    gmailLink: "mailto:uiux@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "UI/UX Designer",
  },
  {
    id: 4,
    image: team4,
    gmailLink: "mailto:developer@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "Full Stack Developer",
  },
  {
    id: 5,
    image: team5,
    gmailLink: "mailto:backend@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ethan Lewis",
    designation: "Backend Developer",
  },
  {
    id: 6,
    image: team6,
    gmailLink: "mailto:frontend@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Frontend Developer",
  },
  {
    id: 7,
    image: team7,
    gmailLink: "mailto:contentwriter@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Cloud and DevOps Engineer",
  },
  {
    id: 8,
    image: team8,
    gmailLink: "mailto:seoexpert@gmail.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "SEO Expert",
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
