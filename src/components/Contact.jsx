import React, { useState } from "react"; // step-1

import Container from "react-bootstrap/Container";

// Form -> Layout -> Form Grid
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

const Contact = () => {
  // step -2
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // step - 3
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // step - 5 :  To validate the fields before submitting.
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // step - 6 :  Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Format the message for WhatsApp
    const whatsappMessage = `Hello! New Contact Request:
                               👤 Name: ${formData.name}
                               📧 Email: ${formData.email}
                               📞 Phone: ${formData.phone}
                               📝 Message: ${formData.message}`.trim();

    // Send to WhatsApp using WhatsApp API Link
    const phoneNumber = "919014782986";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{ textTransform: "capitalize", fontSize: "40px" }}>
            Get Connected with us <span></span>
            <i class="fa-solid fa-comment-dots"></i>
          </h2>
        </div>

        <Form className="contact-form" onSubmit={handleSubmit}>
          {" "}
          {/*#5*/}
          <Row className="g-3">
            <Col sm={4}>
              <Form.Control
                type="text"
                name="name"
                value={formData.name} // #4
                placeholder="Enter your Full name :"
                onChange={handleChange} // #4
                isInvalid={!!errors.name} // #5
              />
              <Form.Control.Feedback type="invalid">
                {" "}
                {/*#5*/}
                {errors.name}
              </Form.Control.Feedback>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your Email :"
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your Phone number :"
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Col>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                placeholder="Leave your message here :"
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Col>
          </Row>
          <div className="btn-holder mt-4">
            <Button type="submit">Send Message</Button>
          </div>
        </Form>
      </Container>

      <div className="google-map">
        {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Hyderabad+(Blue%20Orbit%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}

        <iframe
          title="Blue Orbit Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1748436909469!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <p>
                <a href="mailto:blueorbit@contact.com">blueorbit@contact.com</a>
              </p>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <p>+91 9988221177</p>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <p>Hyderabad, Telangana</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
