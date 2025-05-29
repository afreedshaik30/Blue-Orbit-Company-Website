import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-mobile-alt",
    title: "Mobile Friendly",
    description:
      "Crafting seamless mobile experiences to ensure your website looks stunning and functions perfectly on all devices.",
  },
  {
    id: 2,
    icon: "fas fa-paint-brush",
    title: "Creative UI/UX",
    description:
      "Designing intuitive and engaging user interfaces that boost interaction and enhance user satisfaction.",
  },
  {
    id: 3,
    icon: "fas fa-search",
    title: "Advanced SEO",
    description:
      "Optimizing your content and website structure to improve visibility and rank higher in search engine results.",
  },
  {
    id: 4,
    icon: "fas fa-laptop-code",
    title: "Web Development",
    description:
      "Building tailored web solutions that fit your unique business needs and scale with your growth.",
  },
  {
    id: 5,
    icon: "fas fa-cloud-upload-alt",
    title: "Cloud Integration",
    description:
      "Seamlessly integrating cloud services for enhanced performance, reliability, and scalability.",
  },
  {
    id: 6,
    icon: "fas fa-headset",
    title: "24/7 Support",
    description:
      "Providing round-the-clock support to keep your website running smoothly and your customers happy.",
  },
];

const Services = () => {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">
            Bringing Your Ideas to Life with Our Services
          </div>
        </div>
        <div>
          <Row className="gx-4 gy-4">
            {servicesData.map((data) => (
              <Col sm={4} className="holder" key={data.id}>
                <div className="icon">
                  <i className={data.icon}></i>
                </div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
