import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
  return (
    <Container style={{height:"400px"}}>
        <Row>
            <Col lg={4} className='d-flex align-items-center justify-content-center' data-aos="fade-right">
            <h3 className='about-text'>ABOUT ME</h3>
            </Col>
            <Col lg={8} className="about-me-box" data-aos="fade-left">
            <h5 style={{color:"#00cfff"}}>About Me:</h5>
            <p>I’m a Frontend Developer and UI/UX Designer passionate about crafting intuitive and visually stunning digital experiences. With a solid background in both design and development, I seamlessly blend aesthetics and functionality to create user-centered solutions.<br></br>
My expertise includes HTML, CSS, and JavaScript, allowing me to bring my designs to life with precision. I thrive on collaboration and enjoy working with clients and teams to transform ideas into engaging interfaces that enhance user experience.<br></br>
Outside of work, I stay updated on design trends and new technologies, constantly seeking ways to innovate and improve my skills. Let’s connect and create something amazing together!
has context menu</p>
            </Col>
        </Row>
    </Container>
  )
}

export default About
