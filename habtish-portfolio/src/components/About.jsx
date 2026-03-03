import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5">About <span className="text-primary">Me</span></h2>
        
        <Row className="align-items-center">
          {/* ግራ በኩል - አጭር መግቢያ */}
          <Col lg={6} className="mb-4">
          <div className="about-text p-4">
  <h2 className="fw-bold mb-4" data-aos="fade-up">About Me</h2>
  <p className="lead text-dark" data-aos="fade-up" data-offset="100">
    I am an <strong>Information Systems</strong> student dedicated to aligning technological 
    innovations with business needs. Beyond my academic journey, I have gained extensive 
    experience in <strong>Full-stack Development</strong>, <strong>Graphic Design</strong>, 
    and <strong>Video Editing</strong>.
  </p>
  <p className="lead text-dark" data-aos="fade-up" data-offset="200">
    My mission is to solve complex challenges through simple, modern digital solutions. 
    I take pride in my ability to lead projects from the <strong>initial concept</strong> 
    to a polished, <strong>final outcome</strong>.
  </p>
</div>
          </Col>

          {/* ቀኝ በኩል - ዋና ዋና ነጥቦች (Cards) */}
          <Col lg={6}>
            <Row className="g-4">
              <Col md={12}>
                <Card className="border-0 shadow-sm p-3">
                  <div className="d-flex align-items-center">
                    <FaGraduationCap size={40} className="text-primary me-3" />
                    <div>
                      <h5 className="mb-0 fw-bold">Education</h5>
                      <small className="text-muted">BSc in Information Systems (2nd Year)</small>
                    </div>
                  </div>
                </Card>
              </Col>
              
              <Col md={12}>
                <Card className="border-0 shadow-sm p-3">
                  <div className="d-flex align-items-center">
                    <FaCode size={40} className="text-success me-3" />
                    <div>
                      <h5 className="mb-0 fw-bold">Versatility</h5>
                      <small className="text-muted">Full-stack, Graphic Design & Editing</small>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col md={12}>
                <Card className="border-0 shadow-sm p-3">
                  <div className="d-flex align-items-center">
                    <FaLightbulb size={40} className="text-warning me-3" />
                    <div>
                      <h5 className="mb-0 fw-bold">Goal</h5>
                      <small className="text-muted">Building Impactful Digital Solutions</small>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;