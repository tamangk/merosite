import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../images/background.png';

const About = () => {
    return (
        <div className="about-section" id="about">
            <Container>
                <Row >
                    <Col className="row">
                        <div className="about-intro">
                            <h4>Hi, I'm a Software Developer</h4><br/>
                            <p>Passionate Full Stack Software Developer <br/>
                                having an experience of building Web and <br/>
                                Mobile aapplications with JavaScript / Reactjs <br/>
                                and some other cool projects.</p>
                        </div>
                    </Col>
                    <Col className="col">
                        <div className="about-background">
                            <img src={Background} alt="developer" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>

        
       
        
    )
}

export default About