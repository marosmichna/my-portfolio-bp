import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import HtmlLogo from "../images/Html.png";
import CssLogo from "../images/Css.png";
import JsLogo from "../images/Js.png"
import ReactLogo from "../images/React.png"
import BootsrapLogo from "../images/Bootstrap.png"
import GitLogo from "../images/Git.png"


const Skills = () => {

    const navigate = useNavigate();

    const navigateToPortfolio = () => {
        navigate("/")
    }

  return (
    <div>
        <Container>
            <div className="div-row-skills div-card">
                <Row className="mt-3 justify-content-md-center">
                    <Col sm className="mt-3">
                        <Card className="html-card" border="secondary" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={HtmlLogo} />
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                        <div 
                                            class="progress-bar progress-bar-striped bg-dark progress-html" 
                                            role="progressbar"
                                            aria-valuenow="70"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            70%
                                        </div>
                                    </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="dark">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="mt-3">
                        <Card className="css-card" border="primary" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={CssLogo} />
                            <Card.Body>
                                <Card.Title>CSS</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                            <div 
                                                class="progress-bar progress-bar-striped bg-primary progress-css" 
                                                role="progressbar"
                                                aria-valuenow="55"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                55%
                                            </div>
                                        </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="primary">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="mt-3">
                        <Card className="js-card" border="warning" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={JsLogo} className="skills-img" />
                            <Card.Body>
                                <Card.Title>JAVASCRIPT</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                            <div 
                                                class="progress-bar progress-bar-striped bg-warning progress-js" 
                                                role="progressbar"
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                40%
                                            </div>
                                        </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="warning">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="div-row-skills div-card">
                <Row className="mt-3 justify-content-md-center">
                    <Col sm >
                        <Card className="mt-3 react-card" border="dark" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={ReactLogo} />
                            <Card.Body>
                                <Card.Title>REACT</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                        <div 
                                            class="progress-bar progress-bar-striped bg-dark progress-react" 
                                            role="progressbar"
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            40%
                                        </div>
                                    </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="dark">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="mt-3">
                        <Card className="bootstrap-card" border="primary" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={BootsrapLogo} />
                            <Card.Body>
                                <Card.Title>BOOTSTRAP</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                            <div 
                                                class="progress-bar progress-bar-striped bg-primary progress-css" 
                                                role="progressbar"
                                                aria-valuenow="55"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                55%
                                            </div>
                                        </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="primary">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm className="mt-3">
                        <Card className="git-card" border="warning" style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={GitLogo} className="skills-img" />
                            <Card.Body>
                                <Card.Title>GIT</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">My skills</Card.Subtitle>
                                <Card.Text>
                                    <div class="progress">
                                            <div 
                                                class="progress-bar progress-bar-striped bg-warning progress-git" 
                                                role="progressbar"
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                50%
                                            </div>
                                        </div>
                                </Card.Text>
                                <Card.Title>Courses: </Card.Title>
                                <Card.Text>
                                    Skilmea, Scrimba, Youtube
                                </Card.Text>
                                <Button onClick={navigateToPortfolio} variant="warning">My work</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>   
    </div>
  )
}

export default Skills




