import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button ,Modal} from 'react-bootstrap';

function Projects() {
    const [showGame, setShowGame] = useState(false);
  const myProjects = [
  
 {
  title: "Enterprise Project Management",
  category: "Management",
  // አማርኛ መግለጫ
  descriptionAm: "የቡድን ስራዎችን እና የጊዜ ሰሌዳን በብቃት ለመምራት የተከናወነ የProject Management ስራ::",
  // እንግሊዝኛ መግለጫ
  descriptionEn: "A project management initiative focused on effectively leading team collaborations and managing schedules.",
  image: "/management.png",
  link: "#",
  skills: ["Trello", "Asana", "Planning"]
},
    {
    title: "Advanced Data Entry & Analysis",
    category: "Data Entry",
    descriptionAm: "ትልልቅ ዳታዎችን በስርዓት የማደራጀት፣ የመመዝገብ እና ትክክለኛነታቸውን የማረጋገጥ ስራ::",
    descriptionEn: "Systematically organizing, recording, and ensuring the accuracy of large-scale datasets.",
    image: "/Dataentery.png",
    link: "#",
    skills: ["Excel", "Google Sheets", "Data Mining"]
  },
  {
    title: "Full-Stack Inventory System",
    category: "Development",
    descriptionAm: "Node.js, Express እና MySQL በመጠቀም የተሰራ የዕቃዎች መቆጣጠሪያ ሲስተም::",
    descriptionEn: "An inventory management system built using Node.js, Express, and MySQL.",
    image: "/Fullstack.png",
    link: "#",
    skills: ["React", "Node.js", "MySQL"]
  },
  {
    title: "Classic Snake Game",
    category: "Development",
    descriptionAm: "በ JavaScript እና HTML5 Canvas የተሰራ አዝናኝ የእባብ ጨዋታ።",
    descriptionEn: "A fun and engaging classic Snake game developed using JavaScript and HTML5 Canvas.",
    image: "/snake.png",
    isGame: true,
    link: "/snake/index.html",
    skills: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    descriptionAm: "ለአንድ አዲስ የቴክኖሎጂ ድርጅት የተሰራ ሙሉ የብራንዲንግ እና የሎጎ ስራ::",
    descriptionEn: "A complete branding and logo design project for a new technology startup.",
    image: "/branding.png",
    link: "#",
    skills: ["Photoshop", "Illustrator"]
  },
  {
    title: "Commercial Video Edit",
    category: "Editing",
    descriptionAm: "ለማህበራዊ ሚዲያ ማስታወቂያ የተዘጋጀ ፕሮፌሽናል የቪዲዮ ኤዲቲንግ ስራ::",
    descriptionEn: "Professional video editing work tailored for social media advertisements.",
    image: "/v-editing.png",
    link: "#",
    skills: ["Premiere Pro", "After Effects"]
  }
  ];

  return (
    <section id="project" className="py-5 bg-light">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5">Featured <span className="text-primary">Projects</span></h2>

        {/* አማርኛ */}
  <p className="mt-3 text-dark mx-auto" style={{ maxWidth: '850px', fontSize: '1.05rem' }} data-aos="fade-up">
    እዚህ ጋር ያቀረብኳቸው ፕሮጀክቶች ከተለያዩ ዘርፎች የተውጣጡ ሲሆኑ፣ የእያንዳንዱን ስራ ሀሳብ ወደ ተግባራዊ ዲጂታል መፍትሄ የመቀየር ብቃቴን ያሳያሉ። ጥራትን እና የተጠቃሚዎችን ፍላጎት ማዕከል ያደረጉ ስራዎችን ማቅረብ ላይ አተኩራለሁ።
  </p>

  {/* እንግሊዝኛ */}
  <p className="text-muted italic mx-auto" style={{ maxWidth: '850px', fontStyle: 'italic', fontSize: '0.95rem' }} data-aos="fade-up" data-aos-delay="200">
    The projects showcased here represent my ability to transform ideas into functional digital solutions. Each work reflects my commitment to delivering quality and solving real-world problems through technology.
  </p>
        <Row>
          {myProjects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">


              <Card className="h-100 border-0 shadow-sm project-card overflow-hidden">
            
                {/* ምስል ካለው ያሳያል */}
                <div style={{ height: '200px', overflow: 'hidden' }}>
                   <Card.Img 
                    variant="top" 
                    src={project.image} 
                    style={{ height: '100%', objectFit: 'cover' }} 
                   />
                </div>

                <Card.Body>
                  <Badge bg="primary" className="mb-2">{project.category}</Badge>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>


                  {/* የአማርኛው ጽሁፍ */}
                      <Card.Text className="text-dark fw-normal mb-1" style={{ fontSize: '0.9rem' }}>
                        {project.descriptionAm}
                      </Card.Text>

                      {/* የእንግሊዝኛው ጽሁፍ (ካንተ ኮድ ጋር የተቀናጀ) */}
                      <Card.Text className="text-muted small italic" style={{ minHeight: '50px', fontStyle: 'italic' }}>
                        {project.descriptionEn}
                      </Card.Text>
                  
                  <div className="mb-3">
                    {project.skills.map((s, i) => (
                      <Badge key={i} pill bg="secondary" className="me-1" style={{ fontSize: '0.7rem' }}>{s}</Badge>
                    ))}
                  </div>

                  {/* ጨዋታ ከሆነ "Play" ካልሆነ "View" በተን ያሳያል */}
                  {project.isGame ? (
                    <Button variant="success" className="w-100 fw-bold" onClick={() => setShowGame(true)}>
                      Play Now! 🎮
                    </Button>
                  ) : (
                    <Button variant="outline-primary" className="w-100" href={project.link} target="_blank">
                      View Project
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* --- የጨዋታው ፖፕ-አፕ (Modal) --- */}
        <Modal show={showGame} onHide={() => setShowGame(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold text-primary">Snake Game - Have Fun!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0" style={{ height: '550px', backgroundColor: '#000' }}>
            <iframe 
             id="snake-iframe"
            src="/games/index.html" 
            title="Snake Game" 
            width="100%" 
            height="100%" 
            style={{ border: 'none', background: '#000' }}
            onLoad={() => document.getElementById('snake-iframe').contentWindow.focus()}
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setShowGame(false)}>Exit Game</Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </section>
  );
}

export default Projects;