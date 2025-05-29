import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <section id="footer">
      <Container fluid>
        <div className="copyright">
          &copy; 2025 Blue Orbit,&nbsp;All Right Reserved.
        </div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="mailto:blueorbit@contact.com">
                <i className="fa-brands fa-google"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <p
          style={{
            textAlign: "center",
            padding: "50px 0",
            fontSize: "15px",
            color: "white",
            letterSpacing: "0.5px",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          Explore more of my work at{" "}
          <a
            href="https://afreedshaik30.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "yellow", textDecoration: "none", fontWeight: 500 }}
          >
            AfreedShaik30
          </a>
        </p>
      </Container>
    </section>
  );
};

export default Footer;
