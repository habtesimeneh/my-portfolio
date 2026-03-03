import { Container, Row, Col, Card } from 'react-bootstrap';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare } from 'react-icons/fa';

function Skills() {
  const mySkills = [
    { name: 'HTML5', icon: <FaHtml5 size={50} color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} color="#264de4" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={50} color="#f7df1e" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={50} color="#7952b3" /> },
    { name: 'React', icon: <FaReact size={50} color="#61dbfb" /> },
     { name: 'Node.js', icon: <DiNodejsSmall size={50} color="#3c873a" /> },
    { name: 'Express', icon: <SiExpress size={50} color="#000000" /> },
     { name: 'MySQL', icon: <SiMysql size={50} color="#00758f" /> },
  ];

  return (
    // <section id="skill" className="py-5 bg-black text-center border-top">
        <section id="skill" className="py-5 skills-bg text-center border-top">
      <Container>


             <h2 className="display-5 fw-bold mb-5">My <span className="text-primary">Skills</span></h2>

                        
                {/* የአማርኛ መግለጫ */}
                <p className="lead mb-2 text-muted"  data-aos="fade-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  በኢንፎርሜሽን ሲስተም ትምህርቴ ያገኘሁትን እውቀት ከተግባራዊ ልምዶች ጋር በማጣመር፣ ፈታኝ ለሆኑ ችግሮች ዲጂታል መፍትሄዎችን እፈጥራለሁ። በFull-stack Development፣ በግራፊክ ዲዛይን እና በቪዲዮ ኤዲቲንግ ዘርፎች የዳበረ ክህሎት ያለኝ ሲሆን፣ ጥራት ያላቸውን ስራዎች በቅልጥፍና ማቅረብ ላይ አተኩራለሁ።
                </p>

                {/* የእንግሊዝኛ መግለጫ */}
                <p className="text-dark italic py-3" data-aos="fade-up" data-aos-delay="200" style={{ maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
                  Combining my academic foundation in Information Systems with hands-on experience, I develop innovative digital solutions for complex challenges. I continuously strive to master emerging technologies to bridge the gap between business needs and modern technological possibilities.
                </p>

        <Row className="justify-content-center">
          {mySkills.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-4">
              <Card className="h-100 border-0 shadow-sm p-3 skill-card">
                <div className="mb-3">{skill.icon}</div>
                <h6 className="fw-bold">{skill.name}</h6>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;