import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const header = {
    textAlign: 'center',
    padding: '20px 20px !important'
}

const Project = () => {
    return (
        <div className="project-section" id="project">
            <h1 style={header} >My Projects</h1>
            <div className="projects">
                <Container>
                    <Row >
                        <Col className="project-col">
                            <h3>FaceTouch Detector</h3>
                            <ul>
                                <li>
                                    Developed an Apple Watch application that helps users 
                                    track how often they are touching their face.
                                </li>
                                <li>
                                    Implemented location detection features using Swift 
                                    and CoreLocation framework to send users health 
                                    promoting reminders when leaving home. 
                                </li>
                                <li>
                                    Contributed to an Agile team as a Programmer, 
                                    testing and verifying all features worked 
                                    properly after each sprint.
                                </li>
                            </ul>
                        </Col>
                        <Col className="project-col">
                            <h3>Covid-19 Prediction Application</h3>
                            <ul>
                                <li>
                                    Collected and processed over 15,000 data samples 
                                    from NY Times github repository using Python libraries.
                                </li>
                                <li>
                                    Assisted the team to create a Recurrent Neural 
                                    Network that predicted Covid-19 cases and deaths.
                                </li>
                                <li>
                                    Created Dash web application that allowed 
                                    the team to share results in a visually 
                                    appealing format to a group of 20-25 students.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Project