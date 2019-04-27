import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";

const DropdownLink = (props) => (
  <Link href={props.href || '/under-construction'}>
    <a className="dropdown-item">{props.title}</a>
  </Link>
);

const Header = () => (
  <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav>
        <Link href="/">
          <a className="nav-link">Главная</a>
        </Link>
        <NavDropdown title="Реабилитация наркозависимости">
          <DropdownLink href="/rehabilitation" title="Реабилитация наркозависимости"/>
          <DropdownLink href="/steps12" title="Программа 12 шагов"/>
          <DropdownLink href="/how_works" title="Как проходит лечение"/>
        </NavDropdown>
        <NavDropdown title="Лечение алкоголизма">
          <DropdownLink href="/alcohol" title="Лечение алкоголизма"/>
          <DropdownLink href="/alcohol_woman" title="Лечение у женщин"/>
        </NavDropdown>
        <NavDropdown title="Проблемы наркомании">
          <DropdownLink title="Основные проблемы"/>
          <Link href="/under-construction">
            <a className="dropdown-item">Героин</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Игромания</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Метамфетамин</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Соли</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Спайс</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Экстази</a>
          </Link>
        </NavDropdown>
        <Link href="/under-construction">
          <a className="nav-link">Созависимость</a>
        </Link>
        <NavDropdown title="О центре" alignRight>
          <Link href="/under-construction">
            <a className="dropdown-item">Контакты</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Фотоальбом</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Наш дом</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Видео альбом</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Повышение квалификации</a>
          </Link>
          <Link href="/under-construction">
            <a className="dropdown-item">Видео лекции</a>
          </Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <style jsx global>{`
        .navbar-dark .navbar-nav .nav-link {
          color: white!important;
        }
    `}
    </style>
  </Navbar>
);

export default Header;