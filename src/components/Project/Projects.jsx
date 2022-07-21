import React from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import projects from '../utils/ProjectsDetails';
import ProjectCards from './ProjectCards';
import colorSharp2 from '../../assets/img/color-sharp2.png';

const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My latest projects are shown below.</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>React Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Spring Boot API's</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>About Me</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCards key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam cumque doloribus molestiae obcaecati, odit porro
                    quibusdam. Ad adipisci deleniti impedit incidunt laboriosam
                    natus nobis, officia. Excepturi fugiat maxime similique
                    tenetur. Meaning -> stuff will be here, soon :)
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                    Everyone calls me Bia and I work as a Site Reliability
                    Engineer within one of Europe's leading gaming companies.
                    Over the past three years, I have introduced processes,
                    tools and methods to balance needs throughout the software
                    development lifecycle, from coding and deployment, to
                    maintenance and updates.
                    <br />
                    <br />
                    Through studies during evenings and weekends, I transitioned
                    into a Software Developer Role and today work as a
                    full-stack developer within a specific team that works with
                    Sportsbook API integration and features. While also working
                    within my main Site Reliability Engineering team.
                    <br />
                    <br />
                    What this implies is that I develop the sportsbook product
                    for{' '}
                    <a href='https://comeon-group.com' target={`_blank`}>
                      ComeOn group.
                    </a>{' '}
                    Which means hands-on execution of development tasks to build
                    sportsbook frontend solutions combined with a high degree of
                    collaboration with the rest of the cross-functional team.
                    <br />
                    <br />I also develop fully functional backend APIs using
                    Spring Boot as a Java developer for the same team with tasks
                    such as developing and maintaining new features, discussing
                    technical solutions and architecture, performing technical
                    research and deploying features to production.
                    <br />
                    <br />
                    And just recently, we merged my current Technical Operations
                    Engineering team with other developers to form the new Site
                    Reliability Engineering team.
                    <br />
                    <br />
                    This means that we create a bridge between development and
                    operations by applying a software engineering mindset to
                    system administration topics. We split our time between
                    operations/on-call duties and developing systems and
                    software that help increase site reliability and performance
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt={`image`} />
    </section>
  );
};

export default Projects;
