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
      </Container>
    </section>
  );
};

export default Footer;
