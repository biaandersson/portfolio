import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';
import responsive from '../utils/ResponsiveDesign';

const Skills = () => {
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                FrontEnd: JavaScript, HTML, CSS, Sass, W3 standard, Web APIs,
                Redux, React, NextJs and TailwindCSS. <br /> <br /> BackEnd:
                Java SQL, NoSQL, GraphQL, Spring Boot, Web Applications,
                Microservices and API development.
                <br />
                <br />
                Engineering: CI/CD, Git, GitHub, Docker, Kubernetes, AWS, GCP,
                Monitoring and Analytics, Logging, Firewall, Load Balancer,
                Puppet, Ansible, Terraform, Jenkins and more...
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Site Reliability Engineer</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Image' />
                  <h5>Software Developer</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Spring Boot Developer</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>TechOPS Engineer</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Full-Stack Developer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt='Image' className='background-image-left' />
    </section>
  );
};

export default Skills;
