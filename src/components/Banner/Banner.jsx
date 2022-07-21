import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import TrackVisibility from 'react-on-screen';

import 'animate.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  const toRotate = ['Site Reliability Engineer', 'Full Stack Developer'];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(text.length);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__tada' : ''
                  }>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm Bia, `}
                    <span className='wrap'>{text}</span>
                    <p>
                      I have over 3 years of experience working in Technical
                      Engineering. Currently, I work in the Site Reliability
                      Engineering team at ComeOn Group within the Gaming
                      industry.
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/bia-andersson',
                          '_blank'
                        )
                      }>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
