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
        <NavDropdown title="Реабилитация наркозависимых">
          <DropdownLink href="/rehabilitation" title="Реабилитация наркозависимых"/>
          <DropdownLink href="/steps12" title="Программа 12 шагов"/>
          <DropdownLink href="/how_works" title="Как проходит лечение"/>
        </NavDropdown>
        <NavDropdown title="Лечение алкоголизма">
          <DropdownLink href="/alcohol" title="Лечение алкоголизма"/>
          <DropdownLink href="/alcohol_woman" title="Лечение у женщин"/>
        </NavDropdown>
        <NavDropdown title="Проблемы наркомании">
          <Link href="/drug_problems">
            <a className="dropdown-item">Основные проблемы</a>
          </Link>
          <Link href="/heroin">
            <a className="dropdown-item">Героин</a>
          </Link>
          <Link href="/gambling">
            <a className="dropdown-item">Игромания</a>
          </Link>
          <Link href="/methamphetamine">
            <a className="dropdown-item">Метамфетамин</a>
          </Link>
          <Link href="/salt">
            <a className="dropdown-item">Соли</a>
          </Link>
          <Link href="/spice">
            <a className="dropdown-item">Спайс</a>
          </Link>
          <Link href="/ecstasy">
            <a className="dropdown-item">Экстази</a>
          </Link>
        </NavDropdown>
        <Link href="/codependency">
          <a className="nav-link">Созависимость</a>
        </Link>
        <NavDropdown title="О центре" alignRight>
          <Link href="/about">
            <a className="dropdown-item">О нас</a>
          </Link>
          <Link href="/contacts">
            <a className="dropdown-item">Контакты</a>
          </Link>
          <Link href="/our_home">
            <a className="dropdown-item">Наш дом</a>
          </Link>
          <Link href="/qualification">
            <a className="dropdown-item">Повышение квалификации</a>
          </Link>
          <Link href="/lectures">
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