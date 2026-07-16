import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// EmailJS config (replace with your own verified IDs to enable direct email sending)
const SERVICE_ID = 'service_yu2k7j6';
const TEMPLATE_ID = 'template_u1lsck5';
const PUBLIC_KEY = '5oHjSSbluYnrRw6Pv';
const OWNER_EMAIL = 'habtesimeneh30@gmail.com';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const formData = new FormData(form.current);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const text = (formData.get('message') || '').toString().trim();

    // Basic client-side validation
    if (!name || !email || !text) {
      setStatus('error');
      setMessage('Please fill in all fields (Name, Email, Message).');
      return;
    }

    const finishSuccess = () => {
      setStatus('success');
      setMessage('Your message has been successfully delivered. Thank you!');
      form.current.reset();
    };

    const fallbackToMailto = () => {
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${text}`);
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
      setMessage('Opening your email app to send the message…');
      form.current.reset();
    };

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        finishSuccess();
      })
      .catch((error) => {
        console.error('EmailJS failed, falling back to mailto:', error);
        fallbackToMailto();
      });
  };

  return (
    <section id="contact" className="py-5 contact-section">
      <Container className="py-5">
        <h2 className="display-5 fw-bold text-center mb-5" data-aos="fade-up">
          Get In <span className="text-gold">Touch</span>
        </h2>

        {/* አማርኛ */}
        <p className="mt-3 mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up">
          አዲስ ሀሳብ አለዎት ወይስ አብሮ ለመስራት ይፈልጋሉ? በማንኛውም ጊዜ እኔን ለማነጋገር አያመንቱ። 
          መልዕክትዎን እዚህ ያስቀምጡልኝ፣ በፍጥነት እመለስልዎታለሁ።
        </p>

        {/* እንግሊዝኛ */}
        <p className="mx-auto" style={{ maxWidth: '700px', fontStyle: 'italic', fontSize: '0.9rem' }} data-aos="fade-up" data-aos-delay="200">
          Have a new idea or looking to collaborate? Feel free to reach out anytime. 
          Drop your message here, and I will get back to you as soon as possible.
        </p>

        {status === 'success' && (
          <Alert variant="success" className="mx-auto mt-3" style={{ maxWidth: '760px' }}>
            {message}
          </Alert>
        )}
        {status === 'error' && (
          <Alert variant="danger" className="mx-auto mt-3" style={{ maxWidth: '760px' }}>
            {message}
          </Alert>
        )}

        <Row className="justify-content-center mt-4">
          {/* የግራ በኩል መረጃዎች */}
          <Col lg={4} className="mb-4 mb-lg-0" data-aos="fade-right">
            <Card className="contact-card border-0 shadow-sm p-4 h-100">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="contact-icon text-white p-3 rounded-circle me-3">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Phone</h6>
                    <p className="mb-0 text-muted">+2519 2883 2150</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="contact-icon text-white p-3 rounded-circle me-3">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Email</h6>
                    <p className="mb-0 text-muted small">habtesimeneh30@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="contact-icon text-white p-3 rounded-circle me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">Location</h6>
                    <p className="mb-0 text-muted">Gojjam: Bahir Dar, Ethiopia</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          {/* የቀኝ በኩል ፎርም */}
          <Col lg={7} data-aos="fade-left">
            <Card className="contact-card border-0 shadow-sm p-4">
              <Form ref={form} onSubmit={sendEmail} noValidate>
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
                  <Col md={12}>
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
                  </Col>
                  <Col md={12}>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 py-2 fw-bold"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <Spinner as="span" animation="border" size="sm" className="me-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
