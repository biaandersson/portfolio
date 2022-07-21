import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import comeon from '../../assets/img/comeon3.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import git from '../../assets/img/git.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand='md' className={isScrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={comeon} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon' />
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/bia-andersson/'
                target={`_blank`}>
                <img src={navIcon1} alt='Linkedin' />
              </a>
              <a href='https://github.com/biaandersson' target={`_blank`}>
                <img src={git} alt='Github' />
              </a>
            </div>
            <button
              className='vvd'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/bia-andersson/',
                  '_blank'
                )
              }>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
