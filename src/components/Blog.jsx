import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const blogData = [
  {
    id: 1,
    image: "src/assets/images/blogImg/blog1.jpeg",
    time: "28 Dec 2025",
    title: "The Power of AI and Machine Learning",
    description:
      "Dive into how Artificial Intelligence and Machine Learning are transforming industries, revolutionizing automation, and shaping the future of innovation.",
    link: "https://www.techcrunch.com",
  },
  {
    id: 2,
    image: "src/assets/images/blogImg/blog2.jpeg",
    time: "29 Nov 2025",
    title: "Building Scalable APIs with Node.js",
    description:
      "A step-by-step guide to creating efficient and scalable RESTful APIs using Node.js, Express, and best practices.",
    link: "https://www.nodejs.dev",
  },
  {
    id: 3,
    image: "src/assets/images/blogImg/blog3.jpeg",
    time: "30 Sep 2025",
    title: "Cybersecurity Tips for Developers",
    description:
      "Learn essential cybersecurity practices every developer must follow to keep applications and user data safe in 2025.",
    link: "https://www.cybersecuritynews.com",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from Blog</h2>
          <div className="subtitle">Get our latest news from blog</div>
        </div>
        <Row>
          {blogData.map((data) => {
            return (
              <Col sm={4} key={data.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                      <time>{data.time}</time>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>{data.description}</Card.Text>
                      <Button variant="primary">ReadMore ...</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
