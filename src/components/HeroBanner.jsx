import Carousel from "react-bootstrap/Carousel";

import heroImg1 from "../assets/images/bannerImg/img-hero3.jpg";
import heroImg2 from "../assets/images/bannerImg/img-hero2.jpg";
import heroImg3 from "../assets/images/bannerImg/img-hero1.jpg";

const heroData = [
  {
    id: 1,
    image: heroImg3, // use imported variable
    title: "Innovate Beyond Boundaries",
    description:
      "We break the mold of traditional development, offering cutting-edge technology and bespoke strategies to future-proof your business.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: heroImg2,
    title: "Crafting Code, Designing Dreams",
    description:
      "Transforming ideas into scalable solutions, our team engineers experiences that empower your business to thrive in the digital age.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: heroImg1,
    title: "Empowering Growth Through Technology",
    description:
      "Our expertise bridges the gap between ideas and innovation, delivering custom software that scales with your ambitions.",
    link: "https://www.twitter.com",
  },
];

const HeroBanner = () => {
  return (
    <section id="home" className="hero-block w-100">
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

export default HeroBanner;
