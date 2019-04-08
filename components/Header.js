import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <Navbar expand="lg" >
    <Nav.Item>
      <Link href="/">
        <a style={linkStyle}>Главная</a>
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/drug-rehabilitation">
        <a style={linkStyle}>Реабилитация наркозависимых</a>
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/alcohol">
        <a style={linkStyle}>Лечение алкоголизма</a>
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link href="/about">
        <a style={linkStyle}>О центре</a>
      </Link>
    </Nav.Item>
  </Navbar>
);

export default Header;