import { Container, Modal, Button } from 'react-bootstrap';
import { FaFacebook, FaTelegram, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Imports - እነዚህ ፋይሎች በ components ፎልደር ውስጥ መኖራቸውን አረጋግጥ
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [showPrivacy, setShowPrivacy] = useState(false);

  // 1. የቲም መቀያየሪያ (Toggle Function)
  const ToggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  };

  // 2. የ CSS ውጤት እንዲታይ የሚያደርግ (Effect)
  useEffect(() => {
    // ይህ ለ CSS ፋይልህ [data-theme='dark'] የሚለውን እንዲያነብ ይነግረዋል
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // ለ Bootstrap ክፍሎች የሰውነት ቀለም ይቀይራል
    document.body.className = currentTheme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [currentTheme]);


  useEffect(() => {
    // AOS-ን እዚህ ጋር እናስነሳዋለን
    AOS.init({
      duration: 1000, // አኒሜሽኑ የሚፈጅበት ጊዜ (1 ሰከንድ)
      once: false,    // ወደ ላይና ወደ ታች ስትል ሁሌም እንዲሰራ
    });
  }, []);

  return (
    <div className="App">
      {/* Header - መረጃዎቹን (Props) እዚህ ጋር እንልካለን */}
      <Header currentTheme={currentTheme} ToggleTheme={ToggleTheme} />
      
      {/* ዋናዎቹ የዌብሳይቱ ክፍሎች */}
      <main>
       
        <div id="home" data-aos="fade-up"><Hero /></div>
        <div id="about" data-aos="fade-right"><About /></div>
        <div id="skill" data-aos="zoom-in"><Skill /></div>
        <div id="project" data-aos="fade-left"><Projects /></div>
        <div id="contact" data-aos="flip-up"><Contact /></div>
      </main>

   {/* Footer Section */}
<footer className="py-5 bg-dark text-primary mt-5">
  <div className="container">
    <div className="row text-center text-md-start">
      
      {/* 1. About/Portfolio Info */}
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-3 text-primary">Habtish Portfolio</h5>
        <p className="text-secondary small" style={{ lineHeight: '1.8' }}>
          Providing modern digital solutions in Web Development, Design, and Data Analysis.
          <br />
          ዘመናዊ የዲጂታል መፍትሄዎችን በዌብ ልማት፣ በዲዛይን እና በዳታ አናሊሲስ እናቀርባለን።
        </p>
      </div>

      {/* 2. Quick Links Section (አዲሱ የተጨመረው) */}
      <div className="col-md-4 mb-4 text-center">
        <h5 className="fw-bold mb-3 text-primary">Quick Links / አቋራጭ ሊንኮች</h5>
        <ul className="list-unstyled p-0">
          <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none small hover-link">🏠 Home </a></li>
          <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none small hover-link">👤 About Me</a></li>
          <li className="mb-2"><a href="#projects" className="text-secondary text-decoration-none small hover-link">💻 Projects </a></li>
          <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none small hover-link">📞 Contact </a></li>
           <li className="mb-2"><a href="#skills" className="text-secondary text-decoration-none small hover-link">🤹 Skilles </a></li>
        </ul>
      </div>

      {/* 3. Socials Section (ያንተ የድሮው ኮድ ተስተካክሎ) */}
      <div className="col-md-4 mb-4 text-center text-md-end">
        <h5 className="fw-bold mb-3 text-primary">Follow Me / ይከተሉኝ</h5>
        <div className="footer-socials d-flex justify-content-center justify-content-md-end gap-3 mb-3">
          <a href="https://www.facebook.com/hab.tu.400214" className="text-white"><FaFacebook size={22} /></a>
          <a href="https://t.me/@Habte88" className="text-white"><FaTelegram size={22} /></a>
          <a href="#" className="text-white"><FaInstagram size={22} /></a>
          <a href="https://www.youtube.com/@Habtesimeneh" className="text-white"><FaYoutube size={22} /></a>
          <a href="#" className="text-white"><FaLinkedin size={22} /></a>
        </div>
      </div>
    </div>

    <hr className="bg-secondary opacity-25 w-100 mx-auto mb-4" />

    {/* Copyright & Privacy Section (ያንተ የድሮው ኮድ) */}
    <div className="text-center">
      <p className="mb-0 text-secondary small">&copy; 2026 Habtish Portfolio. Built with React.</p>
      <div className="mt-2">
        <button 
          onClick={() => setShowPrivacy(true)} 
          className="btn btn-link text-secondary text-decoration-none p-0" 
          style={{ fontSize: '13px' }}
        >
          Privacy Policy & Terms
        </button>
      </div>
    </div>
  </div>
</footer>
      {/* Privacy Policy Modal */}
      <Modal show={showPrivacy} onHide={() => setShowPrivacy(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy & Terms</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '400px', overflowY: 'auto', color: '#333' }}>
          <h5>1. Information Collection</h5>
          <p>We collect information you voluntarily provide via the contact form to respond to your inquiries.</p>
          <h5>2. Usage</h5>
          <p>The site is for portfolio showcase purposes. No data is sold or shared with third parties.</p>
          <h5>3. Copyright</h5>
          <p>All projects and content are the intellectual property of Habtish.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPrivacy(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;