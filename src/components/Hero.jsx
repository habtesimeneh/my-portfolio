
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=1400&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&fit=crop&auto=format'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section id="home" className="py-5 hero-bg d-flex align-items-center position-relative overflow-hidden min-vh-100-mobile">
      <div className="hero-full-slider">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`hero-full-slide ${index === currentSlide ? 'active' : ''}`}
          />
        ))}

        <div className="hero-slider-overlay" />

        <button className="hero-nav hero-prev" onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="hero-nav hero-next" onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>

        <div className="hero-dots d-none d-sm-flex">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center mt-4 mt-md-5">
          <Col md={6} className="text-start text-center text-md-start">
            <h5 className="text-gold fw-bold mb-2 mb-md-3">Welcome to my world</h5>
            <h1 className="display-5 fw-bold">
              Hi, I'm <span className="text-gold">Habtish</span>
            </h1>

            <h2 className="h4 fw-bold text-secondary d-flex gap-2 justify-content-center justify-content-md-start">
              <span>I am a</span>
              <span className="text-gold">
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
              <p className="lead fs-5 fs-md-4">
                An <strong>Information Systems</strong> student and <strong>digital solutions</strong> enthusiast. 
                I believe in merging <strong>art with technology</strong> to build something unique.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-3 mt-md-4 justify-content-center justify-content-md-start">
              <Button variant="primary" size="lg" href="#project" className="px-4 shadow w-100 w-sm-auto">Projects</Button>
              <Button variant="outline-dark" size="lg" href="#contact" className="px-4 w-100 w-sm-auto">Contact Me</Button>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="position-relative d-inline-block hero-profile-badge">
              <img
                src="/hero.png"
                alt="Habtish"
                className="img-fluid rounded-circle hero-profile-img shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
