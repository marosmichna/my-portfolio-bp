 import React from 'react'
 import { Container, Row, Col, Image } from "react-bootstrap"
 import maros from "../images/maros.png"

 const AboutMe = () => {

   return (
    <div className="about-div">
        <Container className="about-container">
            <Row className="justify-content-md-center about-row">
                <Col col-sm-6 col-md-6>
                    <Image src={maros} className="rounded about-img" />
                </Col> 
                <Col col-sm-6 col-md-6>
                    <h2 className="about-name">Hello I'm Maroš</h2>
                    <div className="about-study">
                        <h3>My study</h3>
                        <p>I studied at the Technical University in Kosice, Faculty of Mechanical Engineering, Department of Mechatronics.</p>
                    </div>
                    <div className="about-work">
                        <h3>My work</h3>
                        <p>After school I worked as a mechanical designer. I designed conveyors, elevators, single-purpose machines.</p>
                    </div>
                    <div className="about-today">
                        <h3>Today</h3>
                        <p>I started programming a year ago. At first only in free time. I enjoyed programing, so I decided to change my career. Now I work as the programmer.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
   )
 }
 
 export default AboutMe;
 