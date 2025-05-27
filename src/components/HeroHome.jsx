import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: "src/assets/images/img-hero3.jpg",
    title: "Innovate Beyond Boundaries",
    description:
      "We break the mold of traditional development, offering cutting-edge technology and bespoke strategies to future-proof your business.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: "src/assets/images/img-hero2.jpg",
    title: "Crafting Code, Designing Dreams",
    description:
      "Transforming ideas into scalable solutions, our team engineers experiences that empower your business to thrive in the digital age.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: "src/assets/images/img-hero1.jpg",
    title: "Empowering Growth Through Technology",
    description:
      "Our expertise bridges the gap between ideas and innovation, delivering custom software that scales with your ambitions.",
    link: "https://www.twitter.com",
  },
];

const HeroHome = () => {
  return (
    <section id="home" className="hero-block w-100 p-0">
      <Carousel>
        {heroData.map((data) => {
          return (
            <Carousel.Item key={data.id}>
              <img
                className="d-block w-100"
                src={data.image}
                alt={"Slide" + data.id}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a className="btn btn-primary " href={data.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HeroHome;
