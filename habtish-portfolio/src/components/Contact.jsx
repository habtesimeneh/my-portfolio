import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ካነሳሃቸው ስክሪንሾቶች የተገኙ ትክክለኛ IDs
    emailjs.sendForm(
      'service_yu2k7j6',     // Service ID
      'template_u1lsck5',          // Template ID
      form.current, 
      '5oHjSSbluYnrRw6Pv'    // Public Key
    )
   .then((result) => {
    console.log("SUCCESS!", result.text); // እዚህ ጋር ተጠቀምንበት!
    alert("Your message has been successfully delivered. Thank you!");
    e.target.reset();
    }, (error) => {
        alert("Something went wrong. Please try sending your message again.");
        console.log(error.text);
    });
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f2fdf5' }}>
      <Container className="py-5">
        <h2 className="display-5 fw-bold text-center mb-5" data-aos="fade-up">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* አማርኛ */}
    <p className="mt-3 text-dark mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up">
      አዲስ ሀሳብ አለዎት ወይስ አብሮ ለመስራት ይፈልጋሉ? በማንኛውም ጊዜ እኔን ለማነጋገር አያመንቱ። 
      መልዕክትዎን እዚህ ያስቀምጡልኝ፣ በፍጥነት እመለስልዎታለሁ።
    </p>

    {/* እንግሊዝኛ */}
    <p className="text-muted italic mx-auto" style={{ maxWidth: '700px', fontStyle: 'italic', fontSize: '0.9rem' }} data-aos="fade-up" data-aos-delay="200">
      Have a new idea or looking to collaborate? Feel free to reach out anytime. 
      Drop your message here, and I will get back to you as soon as possible.
    </p>

        
        <Row className="justify-content-center">
          {/* የግራ በኩል መረጃዎች */}
          <Col lg={4} className="mb-4" data-aos="fade-right">
            <Card className="border-0 shadow-sm p-4 h-100">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white p-3 rounded-circle me-3">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Phone</h6>
                    <p className="mb-0 text-muted">+2519 2883 2150</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white p-3 rounded-circle me-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Email</h6>
                    <p className="mb-0 text-muted small">habtesimeneh30@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-info text-white p-3 rounded-circle me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Location</h6>
                    <p className="mb-0 text-muted">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          {/* የቀኝ በኩል ፎርም */}
          <Col lg={7} data-aos="fade-left">
            <Card className="border-0 shadow-sm p-4">
              <Form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Subject (Title)</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="title" 
                    placeholder="Subject of your message" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    rows={4} 
                    placeholder="Write your message here..." 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;