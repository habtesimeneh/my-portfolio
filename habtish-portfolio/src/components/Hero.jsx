
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect'; // ይህንን Import አድርግ
// import myPhoto from '../assets/my-photo.jpg'; // የፎቶህ ስም መሆኑን አረጋግጥ

function Hero() {
  return (
    <section id="home" className="py-5 hero-bg min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center mt-5">
          <Col md={6} className="text-start">
            <h5 className="text-primary fw-bold mb-3">Welcome to my world</h5>
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-primary">Habtish</span>
            </h1>
            
            {/* Typing Effect እዚህ ጋር ነው የሚገባው */}
            <h2 className="h2 fw-bold text-secondary d-flex gap-2">
              <span>I am a</span>
              <span className="text-primary">
                <Typewriter
                  options={{
                    strings: [
                      'Full-stack Developer',
                      'UI/UX Designer',
                      'Video Editor',
                      'Programmer',
                      'Brand Identity Expert',
                      'IS Enthusiast',
                      'Digital Solutions Explorer',
                      'Merging Art & Tech'
                                          ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h2>

            <div className="hero-content">
            <p className="lead fs-4">
              An <strong>Information Systems</strong> student and <strong>digital solutions</strong> enthusiast. 
              I believe in merging <strong>art with technology</strong> to build something unique.
            </p>
            {/* ከዚህ በታች ያሉት ሶሻል አይኮኖችህ ይቀጥላሉ */}
          </div>
            <div className="d-flex gap-3 mt-4">
              <Button variant="primary" size="lg" href="#project" className="px-4 shadow">Projects</Button>
              <Button variant="outline-dark" size="lg" href="#contact" className="px-4">Contact Me</Button>
            </div>

            
            {/* Social Media Icons - አዲስ የተጨመረ */}
            <div className="social-icons d-flex gap-4 mt-5">
              <a href="https://www.facebook.com/hab.tu.400214" target="_blank" rel="noreferrer" className="text-primary"><FaFacebook size={28} /></a>
              <a href="https://t.me/@Habte88" target="_blank" rel="noreferrer" className="text-info"><FaTelegram size={28} /></a>
              <a href="https://instagram.com/your-id" target="_blank" rel="noreferrer" className="text-danger"><FaInstagram size={28} /></a>
              <a href="https://www.youtube.com/@Habtesimeneh" target="_blank" rel="noreferrer" className="text-danger"><FaYoutube size={28} /></a>
              <a href="https://linkedin.com/in/your-id" target="_blank" rel="noreferrer" className="text-primary"><FaLinkedin size={28} /></a>
            </div>

          </Col>

          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="position-relative d-inline-block">
              <img 
               src= "/profil.png" 
                alt="Habtish" 
                className="img-fluid rounded-circle shadow-lg border border-5 border-white"
                style={{ width: '380px', height: '380px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;