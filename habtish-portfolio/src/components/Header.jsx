import { Navbar, Nav, Container,Button } from 'react-bootstrap';

function Header({ ToggleTheme, currentTheme }) {
  return (
    // fixed="top" ወደ ላይ ይለጥፈዋል፣ w-100 ደግሞ ሙሉ ስፋት ይሰጠዋል
  <Navbar 
  bg="dark" 
  variant="dark" 
  expand="lg" 
  fixed="top" 
  className="w-100 shadow"
>
      <Container fluid className="px-4"> 




// 2. በ Navbar.Brand ውስጥ እንዲህ ቀይረው
<Navbar.Brand href="#home" className="fw-bold d-flex align-items-center text-white">
  <img
    src="/favicon.png"  // በቀጥታ በስሙ ብቻ ጥራው
    alt="Logo"
    width="30"
    height="30"
    className="me-2 rounded"
    onError={(e) => { e.target.src = "https://via.placeholder.com/30"; }} // ምስሉ ካልተገኘ placeholder እንዲያሳይ
  />
  <span>habtish portfolio</span>
</Navbar.Brand>



        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="#home" className="mx-2">home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">about</Nav.Link>
            <Nav.Link href="#skill" className="mx-2">skill</Nav.Link>
            <Nav.Link href="#project" className="mx-2">project</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">contact</Nav.Link>
            {/* 2. Dark Mode Button እዚህ ጋር ይገባል */}
         <Button 
            variant={currentTheme === 'light' ? 'outline-dark' : 'outline-light'} 
            onClick={ToggleTheme} // አሁን ይሰራል!
            className="ms-lg-3 mt-2 mt-lg-0 rounded-pill px-3"
          >
            {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
