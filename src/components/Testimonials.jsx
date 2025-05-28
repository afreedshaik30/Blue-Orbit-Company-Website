import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      '" Working with this team has been an absolute pleasure. Their attention to detail, dedication, and innovative solutions have made a significant impact on our projects. I highly recommend their services."',
    designation: "Manager ",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      '" Their professionalism and commitment to excellence are truly commendable. They consistently deliver high-quality results and make complex challenges feel manageable. It’s been a great experience collaborating with them. "',
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      '" This team has exceeded my expectations time and again. Their problem-solving skills, clear communication, and passion for their work have been instrumental in our success. I look forward to many more projects together. "',
    designation: "CEO",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2
            style={{
              color: "yellow",
              fontFamily: "Segoe UI, Roboto, sans-serif",
              fontWeight: "600",
            }}
          >
            Client Testimonials
          </h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((data) => {
            return (
              <Carousel.Item key={data.id}>
                <blockquote>
                  <p>{data.description}</p>
                  <cite>
                    <span className="name">{data.name}</span>
                    <span className="designation">{data.designation}</span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
