import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import comeon from '../../assets/img/comeon3.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import git from '../../assets/img/git.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={6}>
            <img src={comeon} alt='logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon mt-2'>
              <a
                href='https://www.linkedin.com/in/bia-andersson/'
                target={`_blank`}>
                <img src={navIcon1} alt='Linkedin' />
              </a>
              <a href='https://github.com/biaandersson' target={`_blank`}>
                <img src={git} alt='Github' />
              </a>
            </div>
            <p>
              CopyRight 2022. All Rights Reserved <br />{' '}
              <a
                href='https://comeon-group.com'
                target={`_blank`}
                className='justify-content-end text-decoration-none'>
                #WeAreComeon
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
